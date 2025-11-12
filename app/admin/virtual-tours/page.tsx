"use client";
import { useEffect, useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import Link from "next/link";
import VideoUploader from "@/components/admin/VideoUploader";
import { MediaItem, deleteMedia, getJSON } from "@/lib/storage";

export default function VirtualToursAdminPage() {
  const { authed } = useAdmin();
  const [items, setItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    const all = getJSON<MediaItem[]>("media", []);
    setItems(all.filter((m) => m.type === "video" && m.category === "virtual-tour"));
  }, []);

  if (!authed) {
    return (
      <div className="container-px max-w-3xl mx-auto py-10">
        Please <Link href="/admin/login" className="text-primary underline">log in</Link> to manage virtual tours.
      </div>
    );
  }

  function onUploaded(item: MediaItem) {
    setItems((prev) => [item, ...prev]);
  }

  function remove(id: string) {
    deleteMedia(id);
    setItems((s) => s.filter((i) => i.id !== id));
  }

  return (
    <div className="container-px max-w-6xl mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Virtual Tours Manager</h1>
      <div className="rounded-xl border p-4">
        <div className="text-sm font-medium mb-2">Upload Virtual Tour Video</div>
        <VideoUploader category="virtual-tour" onUploaded={onUploaded} />
      </div>
      <div>
        <h2 className="text-lg font-medium mb-3">Existing Tours</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((m) => (
            <div key={m.id} className="rounded-xl border overflow-hidden">
              <video src={m.dataUrl} controls className="w-full aspect-video" />
              <div className="px-3 py-2 text-sm flex items-center justify-between">
                <div className="truncate">{m.title || "Virtual Tour"}</div>
                <button onClick={() => remove(m.id)} className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          ))}
          {items.length === 0 && <div className="text-sm text-dark/70">No virtual tours uploaded yet.</div>}
        </div>
      </div>
    </div>
  );
}

