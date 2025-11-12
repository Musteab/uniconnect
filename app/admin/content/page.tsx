"use client";
import RichTextEditor from "@/components/admin/RichTextEditor";
import ImageUploader from "@/components/admin/ImageUploader";
import Button from "@/components/ui/Button";
import { getJSON, setJSON } from "@/lib/storage";
import { useEffect, useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import Link from "next/link";

type HomeContent = { heroTitle: string; heroStats: { label: string; value: string }[] };

export default function ContentPage() {
  const { authed } = useAdmin();
  const [home, setHome] = useState<HomeContent>({ heroTitle: "Study Abroad, Simplified.", heroStats: [] });
  const [about, setAbout] = useState<string>("<p>About Uni-Connect...</p>");

  useEffect(() => {
    setHome(getJSON<HomeContent>("content_home", home));
    setAbout(getJSON<string>("content_about", about));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authed) return (
    <div className="container-px max-w-3xl mx-auto py-10">Please <Link href="/admin/login" className="text-primary underline">log in</Link>.</div>
  );

  return (
    <div className="container-px max-w-5xl mx-auto py-10 space-y-10">
      <section>
        <h2 className="text-xl font-semibold">Homepage Editor</h2>
        <div className="mt-4 space-y-3">
          <input
            className="w-full rounded-md border px-3 py-2 text-sm"
            value={home.heroTitle}
            onChange={(e) => setHome({ ...home, heroTitle: e.target.value })}
          />
          <div className="text-sm text-dark/70">Hero Background Video</div>
          <div className="rounded-md border p-3">
            <p className="text-sm text-dark/70 mb-2">Upload an MP4/WebM (stored in Media Library)</p>
            <ImageUploader />
          </div>
          <Button onClick={() => setJSON("content_home", home)}>Save Homepage</Button>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold">About Page Editor</h2>
        <div className="mt-4 space-y-3">
          <RichTextEditor value={about} onChange={setAbout} />
          <Button onClick={() => setJSON("content_about", about)}>Save About</Button>
        </div>
      </section>
    </div>
  );
}

