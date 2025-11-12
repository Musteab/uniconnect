"use client";
import { useAdmin } from "@/context/AdminContext";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AdminDashboard() {
  const { authed, logout } = useAdmin();
  if (!authed) {
    return (
      <div className="container-px max-w-3xl mx-auto py-10">
        <h1 className="text-2xl font-semibold mb-2">Admin</h1>
        <p className="text-dark/70">Please <Link href="/admin/login" className="text-primary underline">log in</Link> to access the dashboard.</p>
      </div>
    );
  }
  return (
    <div className="container-px max-w-7xl mx-auto py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Button variant="ghost" onClick={logout}>Log out</Button>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/admin/content" className="rounded-xl border p-5 hover:bg-light">Content</Link>
        <Link href="/admin/media" className="rounded-xl border p-5 hover:bg-light">Media Library</Link>
        <Link href="/admin/submissions" className="rounded-xl border p-5 hover:bg-light">Form Submissions</Link>
      </div>
    </div>
  );
}

