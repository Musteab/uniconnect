"use client";
import { useMemo, useState } from "react";

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

type Props = {
  src: string;
  alt: string;
  className?: string;
  posterSrc?: string;
};

export default function VideoThumbnail({ src, alt, className = "", posterSrc }: Props) {
  const poster = useMemo(() => posterSrc || toCloudinaryPoster(src), [posterSrc, src]);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (!poster || errored) {
    return (
      <div className={`w-full h-full grid place-items-center bg-slate-800 text-white text-xs ${className}`}>
        No preview
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        src={poster}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        loading="lazy"
      />
    </div>
  );
}
