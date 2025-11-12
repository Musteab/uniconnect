"use client";
import { useEffect, useState } from "react";
import { MediaItem, deleteMedia, getJSON } from "@/lib/storage";

export default function MediaGallery() {
  const [items, setItems] = useState<MediaItem[]>([]);
  useEffect(() => {
    setItems(getJSON<MediaItem[]>("media", []));
  }, []);

  function remove(id: string) {
    deleteMedia(id);
    setItems((s) => s.filter((i) => i.id !== id));
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {items.map((m) => (
        <div key={m.id} className="rounded-lg border overflow-hidden">
          {m.type === "image" ? (
            <img src={m.dataUrl} alt={m.alt ?? ""} className="aspect-video object-cover" />
          ) : (
            <video src={m.dataUrl} className="aspect-video w-full" />
          )}
          <div className="p-2 text-xs flex items-center justify-between">
            <div className="truncate">{m.title || m.alt || m.type}</div>
            <button onClick={() => remove(m.id)} className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      ))}
      {items.length === 0 && <div className="col-span-full text-sm text-dark/70">No media yet.</div>}
    </div>
  );
}

