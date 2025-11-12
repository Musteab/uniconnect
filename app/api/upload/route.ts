import { NextRequest } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  // Basic in-memory rate limit (per IP): 20 requests per minute
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || (req as any).ip || "local";
  // @ts-ignore
  const store: Map<string, { count: number; reset: number }> = (global as any).__uploadRate__ || new Map();
  // @ts-ignore
  (global as any).__uploadRate__ = store;
  const now = Date.now();
  const windowMs = 60_000;
  const limit = 20;
  const cur = store.get(ip) ?? { count: 0, reset: now + windowMs };
  if (now > cur.reset) {
    cur.count = 0; cur.reset = now + windowMs;
  }
  cur.count += 1; store.set(ip, cur);
  if (cur.count > limit) {
    return new Response("Too Many Requests", { status: 429, headers: { "Retry-After": Math.ceil((cur.reset - now)/1000).toString() } });
  }

  const session: any = await getServerSession(authOptions as any);
  if (!session || session?.user?.role !== "admin") {
    return new Response("Unauthorized", { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file") as unknown as File | null;
  if (!file) return new Response("Missing file", { status: 400 });
  if (file.size > 50 * 1024 * 1024) return new Response("File too large", { status: 400 });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const result = await new Promise<any>((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      { resource_type: "auto", folder: "uniconnect" },
      (error, result) => (error ? reject(error) : resolve(result))
    );
    upload.end(buffer);
  });

  return Response.json({ url: result.secure_url, public_id: result.public_id, resource_type: result.resource_type });
}
