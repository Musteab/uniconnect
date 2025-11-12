"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { MediaItem, upsertMedia, uuid } from "@/lib/storage";

export default function ImageUploader({ onUploaded }: { onUploaded?: (item: MediaItem) => void }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [alt, setAlt] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleFile(file?: File) {
    if (!file) return;
    if (!/image\/(jpeg|png|webp)/.test(file.type)) return alert("Unsupported format");
    const fd = new FormData();
    fd.append("file", file);
    setLoading(true);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      setPreview(String(data.url));
    } catch (e) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  }

  function save() {
    if (!preview) return;
    const item: MediaItem = {
      id: uuid(),
      type: "image",
      dataUrl: preview, // now a Cloudinary URL
      alt,
      createdAt: Date.now(),
    };
    upsertMedia(item);
    onUploaded?.(item);
    setPreview(null);
    setAlt("");
  }

  return (
    <div className="space-y-3">
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(e) => handleFile(e.target.files?.[0] ?? undefined)}
      />
      {preview && (
        <div className="space-y-2">
          <img src={preview} alt="preview" className="max-h-48 rounded-md border" />
          <input
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Alt text (accessibility)"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
          />
          <div className="flex gap-2">
            <Button onClick={save} disabled={loading}>Save</Button>
            <Button variant="ghost" onClick={() => setPreview(null)}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
}
