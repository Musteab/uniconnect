export const metadata = { title: "Universities" };
import PageTransition from "@/components/layout/PageTransition";
import UniversitiesGrid from "@/components/universities/UniversitiesGrid";

export default function UniversitiesPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-7xl mx-auto py-10">
        {/* Search and country filter removed */}

        <UniversitiesGrid />
      </section>
    </PageTransition>
  );
}
