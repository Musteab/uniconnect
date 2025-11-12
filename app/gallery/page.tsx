export const metadata = { title: "Gallery" };
import PageTransition from "@/components/layout/PageTransition";

export default function GalleryPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-7xl mx-auto py-10">
        <h1 className="text-3xl font-semibold">Gallery</h1>
        <div className="mt-6 flex gap-2 text-sm">
          {['All','Events','Campus Visits','Student Life','Workshops'].map((t)=> (
            <button key={t} className="rounded-full border px-3 py-1 hover:bg-light">{t}</button>
          ))}
        </div>
        <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance]"></div>
        <div className="mt-8">
          <h2 className="text-2xl font-medium">Videos</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-lg bg-light" />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

