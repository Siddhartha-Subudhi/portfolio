
import TopNav from "@/components/TopNav";

const Courses = () => (
  <main className="min-h-screen w-full bg-background text-primary">
    <TopNav />
    <section className="max-w-3xl mx-auto px-4 py-16 animate-fade-in">
      <h1 className="font-bold text-4xl mb-4 text-primary tracking-tight">Courses</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Advance your career! Unlock expert-created data engineering courses from beginner fundamentals to cloud mastery.
      </p>
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent mb-2">
          <h2 className="font-semibold text-2xl mb-1 text-accent">Azure Data Engineering Bootcamp</h2>
          <p className="text-muted-foreground">Intensive, project-based course for aspiring Azure professionals.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
          <h2 className="font-semibold text-2xl mb-1 text-accent">Data Lakes and Analytics in the Cloud</h2>
          <p className="text-muted-foreground">From setup to production analytics—everything for a data-driven business.</p>
        </div>
      </div>
    </section>
  </main>
);

export default Courses;
