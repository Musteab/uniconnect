"use client";
import ImageUploader from "@/components/admin/ImageUploader";
import VideoUploader from "@/components/admin/VideoUploader";
import { getJSON, deleteMedia, MediaItem, upsertMedia } from "@/lib/storage";
import { useEffect, useState } from "react";

export default function MediaManager() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [migrating, setMigrating] = useState(false);
  const [migratedCount, setMigratedCount] = useState(0);
  const [migrateTotal, setMigrateTotal] = useState(0);
  const [toasts, setToasts] = useState<{ id: string; text: string; type: "success" | "error" }[]>([]);
  const reload = () => setItems(getJSON<MediaItem[]>("media", []));
  useEffect(() => { reload(); }, []);

  function addToast(text: string, type: "success" | "error" = "success") {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((t) => [...t, { id, text, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  }

  return (
    <div className="mt-5 grid gap-6">
      <div className="rounded-xl border p-4">
        <div className="font-medium">Migration Tools</div>
        <p className="text-sm text-dark/70">Move any locally stored Base64 media to Cloudinary and replace references.</p>
        <div className="mt-3 flex items-center gap-3">
          <button
            className="rounded-md border px-3 py-2 text-sm hover:bg-light disabled:opacity-60"
            onClick={async () => {
              const list = getJSON<MediaItem[]>("media", []);
              const toMigrate = list.filter((it) => it.dataUrl?.startsWith("data:"));
              setMigrateTotal(toMigrate.length);
              setMigratedCount(0);
              if (!toMigrate.length) return;
              setMigrating(true);

              const dataUrlToFile = async (dataUrl: string, fallbackName: string) => {
                const [header, base64] = dataUrl.split(",");
                const mimeMatch = /data:([^;]+);base64/.exec(header ?? "");
                const mime = mimeMatch?.[1] ?? "application/octet-stream";
                const byteString = atob(base64 ?? "");
                const len = byteString.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) bytes[i] = byteString.charCodeAt(i);
                const blob = new Blob([bytes], { type: mime });
                const ext = mime.includes("jpeg") ? "jpg" : mime.split("/")[1] || "bin";
                return new File([blob], `${fallbackName}.${ext}`, { type: mime });
              };

              for (const it of toMigrate) {
                try {
                  const file = await dataUrlToFile(it.dataUrl, it.id);
                  const fd = new FormData();
                  fd.append("file", file);
                  const res = await fetch("/api/upload", { method: "POST", body: fd });
                  if (!res.ok) throw new Error("upload failed");
                  const data = await res.json();
                  // update the item locally with new URL
                  const updated: MediaItem = { ...it, dataUrl: String(data.url) };
                  upsertMedia(updated);
                  addToast(`Migrated ${it.type} ${it.id.slice(0, 6)}…`, "success");
                } catch (e) {
                  // skip on failure
                  addToast(`Failed to migrate ${it.type} ${it.id.slice(0, 6)}…`, "error");
                } finally {
                  setMigratedCount((c) => c + 1);
                }
              }

              reload();
              setMigrating(false);
            }}
            disabled={migrating}
          >
            {migrating ? `Migrating ${migratedCount}/${migrateTotal}...` : "Migrate Base64 to Cloudinary"}
          </button>
          {migrating && (
            <div className="text-xs text-dark/70">Please keep this tab open until migration completes.</div>
          )}
        </div>
      </div>
      <div className="rounded-xl border p-4">
        <div className="font-medium">Upload Image</div>
        <p className="text-sm text-dark/70">Accepted: JPEG/PNG/WebP</p>
        <div className="mt-3"><ImageUploader onUploaded={reload} /></div>
      </div>

      <div className="rounded-xl border p-4">
        <div className="font-medium">Upload Video</div>
        <p className="text-sm text-dark/70">Accepted: MP4/WebM/MOV (max 50MB)</p>
        <div className="mt-3"><VideoUploader onUploaded={reload} /></div>
      </div>

      <div className="rounded-xl border p-4">
        <div className="font-medium">Library</div>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(it => (
            <div key={it.id} className="rounded-md border p-2 space-y-2">
              {it.type === 'image' ? (
                <img src={it.dataUrl} alt={it.alt ?? ''} className="w-full h-32 object-cover rounded" />
              ) : (
                <video src={it.dataUrl} controls className="w-full h-32 object-cover rounded" />
              )}
              <div className="text-xs break-all">{it.dataUrl}</div>
              <button
                className="text-xs rounded border px-2 py-1 hover:bg-light"
                onClick={() => { deleteMedia(it.id); reload(); }}
              >Delete</button>
            </div>
          ))}
          {!items.length && <div className="text-sm text-dark/70">No media yet.</div>}
        </div>
      </div>

      {/* Toasts */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 space-y-2 w-[92vw] max-w-md">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`rounded-md px-3 py-2 text-sm shadow-lg border ${
              t.type === "success" ? "bg-emerald-600/95 text-white border-emerald-700/50" : "bg-rose-600/95 text-white border-rose-700/50"
            }`}
          >
            {t.text}
          </div>
        ))}
      </div>
    </div>
  );
}
