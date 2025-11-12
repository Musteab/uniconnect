"use client";
import ImageUploader from "@/components/admin/ImageUploader";
import VideoUploader from "@/components/admin/VideoUploader";
import MediaGallery from "@/components/admin/MediaGallery";
import { useAdmin } from "@/context/AdminContext";
import Link from "next/link";

export default function MediaPage() {
  const { authed } = useAdmin();
  if (!authed) return (
    <div className="container-px max-w-3xl mx-auto py-10">Please <Link href="/admin/login" className="text-primary underline">log in</Link>.</div>
  );
  return (
    <div className="container-px max-w-6xl mx-auto py-10 space-y-8">
      <h1 className="text-3xl font-semibold">Media Library</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-medium">Upload Image</h2>
          <div className="mt-3 rounded-xl border p-4">
            <ImageUploader />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium">Upload Video</h2>
          <div className="mt-3 rounded-xl border p-4">
            <VideoUploader />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-3">Library</h2>
        <MediaGallery />
      </div>
    </div>
  );
}

