#!/usr/bin/env node
// Bulk upload local media to Cloudinary and write a mapping file.
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

// Load env (supports .env.local/.env via Next, but fallback here if needed)
try {
  const dotenv = await import('dotenv');
  dotenv.config({ path: '.env.local' });
  dotenv.config();
} catch {}

const ROOT = process.cwd();
const inputDir = process.argv[2] || 'public';
const folder = process.argv[3] || 'uniconnect';
const mappingFile = process.argv[4] || 'cloudinary-map.json';

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  console.error('Missing CLOUDINARY_* env. Set .env.local and retry.');
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const allowed = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.mp4', '.webm', '.mov', '.avi']);

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full));
    else results.push(full);
  }
  return results;
}

const allFiles = walk(path.join(ROOT, inputDir)).filter((p) => allowed.has(path.extname(p).toLowerCase()));
if (!allFiles.length) {
  console.log(`No media found under ${inputDir}`);
  process.exit(0);
}

const outMap = {};
let ok = 0, fail = 0;
for (const file of allFiles) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const publicId = rel
    .replace(/^public\//, '')
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z0-9/_-]/g, '_');
  try {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: 'auto',
      folder,
      public_id: publicId,
      overwrite: true,
    });
    outMap[rel] = res.secure_url;
    ok++;
    console.log('Uploaded:', rel, '->', res.secure_url);
  } catch (e) {
    console.error('Failed:', rel, e?.message || e);
    fail++;
  }
}

fs.writeFileSync(mappingFile, JSON.stringify(outMap, null, 2));
console.log(`\nDone. Uploaded ${ok}, failed ${fail}. Mapping written to ${mappingFile}`);

