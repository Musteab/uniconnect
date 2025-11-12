"use client";
import { useMemo } from "react";

function toCloudinaryPoster(url: string): string | null {
  try {
    const u = new URL(url);
    if (!/res\.cloudinary\.com/.test(u.host) || !/\/video\/upload\//.test(u.pathname)) return null;
    const parts = u.pathname.split("/video/upload/");
    const left = parts[0] + "/video/upload/so_1/";
    let right = parts[1] || "";
    right = right.replace(/\.[a-z0-9]+$/i, ".jpg");
    return `${u.protocol}//${u.host}${left}${right}`;
  } catch { return null; }
}

export default function VideoThumbnail({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const poster = useMemo(() => toCloudinaryPoster(src), [src]);
  return (
    <div className={className}>
      {poster ? (
        <img
          src={poster}
          alt={alt}
          className="w-full h-full object-cover opacity-0 transition-opacity duration-300"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
      ) : (
        <div className="w-full h-full grid place-items-center bg-light text-xs text-dark/70">Loading…</div>
      )}
    </div>
  );
}

