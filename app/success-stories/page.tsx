export const metadata = { title: "Success Stories" };
import PageTransition from "@/components/layout/PageTransition";

import StoriesList from "@/components/stories/StoriesList";

export default function SuccessStoriesPage() {
  return (
    <PageTransition>
      <section className="container-px max-w-7xl mx-auto py-10">
        <h1 className="text-3xl font-semibold">Student Stories</h1>
        <p className="text-dark/70 mt-2">Real journeys from around the world to Malaysia with UNI-Connect.</p>
        <StoriesList />
      </section>
    </PageTransition>
  );
}
