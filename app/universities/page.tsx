export const metadata = { title: "Universities" };
import PageTransition from "@/components/layout/PageTransition";
import UniversitiesGrid from "@/components/universities/UniversitiesGrid";
import VirtualTours from "@/components/universities/VirtualTours";

export default function UniversitiesPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-7xl mx-auto py-10">
        {/* Search and country filter removed */}

        <UniversitiesGrid />

        <div className="mt-12">
          <h2 className="text-2xl font-medium">Virtual Tours</h2>
          <div className="mt-4">
            <VirtualTours />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
