import PageTransition from "@/components/layout/PageTransition";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = { title: "Admin" };

export default async function AdminPage() {
  let session = null as any;
  try {
    session = await getServerSession(authOptions as any);
  } catch {}
  if (!session || (session.user as any)?.role !== "admin") redirect("/login");
  return (
    <PageTransition>
      <section className="container-px max-w-4xl mx-auto py-10">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <Link href="/admin/media" className="rounded-xl border p-5 hover:bg-light transition block">
            <div className="font-medium">Media Manager</div>
            <p className="text-sm text-dark/70 mt-1">Upload images and videos (Cloudinary).</p>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
