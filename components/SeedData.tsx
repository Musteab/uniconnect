"use client";
import { useEffect } from "react";
import { getJSON, setJSON } from "@/lib/storage";

export default function SeedData() {
  useEffect(() => {
    const seeded = getJSON<boolean>("seeded", false);
    if (seeded) return;
    setJSON("content_home", {
      heroTitle: "Study Abroad, Simplified.",
      heroStats: [
        { label: "Students Placed", value: "3,500+" },
        { label: "Partner Universities", value: "120+" },
        { label: "Success Rate", value: "96%" },
      ],
    });
    setJSON("content_about", "<p>Uni-Connect empowers Malaysian students to study abroad through trusted guidance and lifelong support.</p>");
    setJSON("submissions", []);
    setJSON("media", []);
    setJSON("seeded", true);
  }, []);
  return null;
}

