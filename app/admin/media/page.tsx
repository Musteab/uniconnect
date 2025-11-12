import PageTransition from "@/components/layout/PageTransition";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import MediaManager from "@/components/admin/MediaManager";

export const metadata = { title: "Media Manager" };

export default async function MediaPage() {
  let session = null as any;
  try {
    session = await getServerSession(authOptions as any);
  } catch {}
  if (!session || (session.user as any)?.role !== "admin") redirect("/login");
  return (
    <PageTransition>
      <section className="container-px max-w-4xl mx-auto py-10">
        <h1 className="text-2xl font-semibold">Media Manager</h1>
        <MediaManager />
      </section>
    </PageTransition>
  );
}
