
import TopNav from "@/components/TopNav";

const Posts = () => (
  <main className="min-h-screen w-full bg-background text-primary">
    <TopNav />
    <section className="max-w-3xl mx-auto px-4 py-16 animate-fade-in">
      <h1 className="font-bold text-4xl mb-4 text-primary tracking-tight">Posts</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Dive into the latest posts about Azure Data Engineering, cloud trends, and real-world projects. Stay ahead of the curve with practical, expert insights!
      </p>
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent mb-2">
          <h2 className="font-semibold text-2xl mb-1 text-accent">Building ETL Pipelines with Azure Data Factory</h2>
          <p className="text-muted-foreground">A hands-on approach to orchestrating and automating cloud-based data pipelines.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
          <h2 className="font-semibold text-2xl mb-1 text-accent">Best Practices for Data Lake Security</h2>
          <p className="text-muted-foreground">Secure your cloud data with lessons from real enterprise deployments.</p>
        </div>
      </div>
    </section>
  </main>
);

export default Posts;
