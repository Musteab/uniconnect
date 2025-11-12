"use client";
import { useEffect, useRef, useState } from "react";

export default function VideoThumbnail({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [thumb, setThumb] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let mounted = true;
    const onLoaded = async () => {
      try {
        video.currentTime = 0.1; // seek a tiny bit
        await new Promise((r) => setTimeout(r, 60));
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL("image/jpeg", 0.7);
        if (mounted) setThumb(url);
      } catch {
        // ignore, leave thumb null
      }
    };
    video.addEventListener("loadeddata", onLoaded);
    return () => {
      mounted = false;
      video.removeEventListener("loadeddata", onLoaded);
    };
  }, [src]);

  return (
    <div className={className}>
      {thumb ? (
        <img src={thumb} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full grid place-items-center bg-light text-xs text-dark/70">Loading preview…</div>
      )}
      {/* Hidden video used to capture a frame */}
      <video ref={videoRef} src={src} muted playsInline preload="auto" className="hidden" />
    </div>
  );
}

