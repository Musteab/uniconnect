"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { MediaItem, upsertMedia, uuid } from "@/lib/storage";

export default function VideoUploader({ onUploaded, category }: { onUploaded?: (item: MediaItem) => void; category?: string }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState<number>(0);

  async function handleFile(file?: File) {
    if (!file) return;
    if (!/video\/(mp4|webm)/.test(file.type)) return alert("Unsupported format");
    if (file.size > 50 * 1024 * 1024) return alert("Max 50MB");
    // For demo: read as base64 with fake progress
    setProgress(5);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(String(reader.result));
      setProgress(100);
    };
    reader.onprogress = (e) => {
      if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
    };
    reader.readAsDataURL(file);
  }

  function save() {
    if (!preview) return;
    const item: MediaItem = {
      id: uuid(),
      type: "video",
      dataUrl: preview,
      title,
      category,
      createdAt: Date.now(),
    };
    upsertMedia(item);
    onUploaded?.(item);
    setPreview(null);
    setTitle("");
    setProgress(0);
  }

  return (
    <div className="space-y-3">
      <input type="file" accept="video/mp4,video/webm" onChange={(e) => handleFile(e.target.files?.[0] ?? undefined)} />
      {progress > 0 && progress < 100 && (
        <div className="w-full h-2 rounded bg-light overflow-hidden">
          <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
        </div>
      )}
      {preview && (
        <div className="space-y-2">
          <video src={preview} controls className="max-h-48 rounded-md border w-full" />
          <input
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex gap-2">
            <Button onClick={save}>Save</Button>
            <Button variant="ghost" onClick={() => setPreview(null)}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
}
