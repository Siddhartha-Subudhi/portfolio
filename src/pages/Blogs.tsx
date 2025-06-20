
import TopNav from "@/components/TopNav";

const Blogs = () => (
  <main className="min-h-screen w-full bg-background text-primary">
    <TopNav />
    <section className="max-w-3xl mx-auto px-4 py-16 animate-fade-in">
      <h1 className="font-bold text-4xl mb-4 text-accent tracking-tight">Blogs</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Insightful blogs from Siddhartha Subudhi on technology, data engineering strategy, and professional growth. Explore deep dives, tutorials, and more.
      </p>
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary mb-2">
          <h2 className="font-semibold text-2xl mb-1 text-primary">How to Scale Azure Synapse</h2>
          <p className="text-muted-foreground">Get the most from your big data analytics by mastering Synapse scaling options.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
          <h2 className="font-semibold text-2xl mb-1 text-primary">Mental Models for Data Engineers</h2>
          <p className="text-muted-foreground">Think like a cloud architect with these actionable mental models for efficiency and innovation.</p>
        </div>
      </div>
    </section>
  </main>
);

export default Blogs;
