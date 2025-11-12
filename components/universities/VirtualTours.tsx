"use client";
import { useEffect, useState } from "react";
import { MediaItem, getJSON } from "@/lib/storage";
import { useAdmin } from "@/context/AdminContext";

export default function VirtualTours() {
  const { authed } = useAdmin();
  const [videos, setVideos] = useState<MediaItem[]>([]);

  useEffect(() => {
    const list = getJSON<MediaItem[]>("media", []);
    setVideos(list.filter((m) => m.type === "video" && (m.category === "virtual-tour" || !m.category)));
  }, []);

  return (
    <div>
      {videos.length === 0 && (
        <div className="text-sm text-dark/70">No virtual tours yet. {authed ? "Use Admin › Virtual Tours to upload." : "Admins can add videos from the Admin panel."}</div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {videos.map((v) => (
          <div key={v.id} className="rounded-xl border overflow-hidden">
            <video src={v.dataUrl} controls className="w-full aspect-video" />
            <div className="px-3 py-2 text-sm">{v.title || "Virtual Tour"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
