"use client";
export type MediaType = "image" | "video";
export type MediaItem = {
  id: string;
  type: MediaType;
  dataUrl: string; // Base64 or external URL
  alt?: string;
  title?: string;
  category?: string;
  createdAt: number;
};

const PREFIX = "uc_";

export function getJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function setJSON<T>(key: string, value: T) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function upsertMedia(item: MediaItem) {
  const list = getJSON<MediaItem[]>("media", []);
  const idx = list.findIndex((m) => m.id === item.id);
  if (idx >= 0) list[idx] = item; else list.push(item);
  setJSON("media", list);
}

export function deleteMedia(id: string) {
  const list = getJSON<MediaItem[]>("media", []);
  setJSON(
    "media",
    list.filter((m) => m.id !== id)
  );
}

export function uuid() {
  return (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`);
}

