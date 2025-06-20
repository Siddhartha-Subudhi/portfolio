
const projects = [
  {
    title: "Real-time ETL Pipeline with ADF & Databricks",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
    summary: "A robust pipeline processing streaming data from on-premise sources to Azure, using ADF orchestration and Databricks transformations.",
    tech: ["Azure Data Factory", "Databricks", "SQL", "Azure Blob"]
  },
  {
    title: "SQL Server to Azure Cloud Migration",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    summary: "Successful migration of on-prem SQL Server databases to Azure SQL with minimal downtime and advanced cloud monitoring.",
    tech: ["SQL Server", "Azure SQL", "Azure Monitor", "ADF"]
  },
  {
    title: "Power BI Dashboard for Business Insights",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&q=80",
    summary: "Interactive dashboards for business KPIs, leveraging Power BI’s visual capabilities and direct data connections.",
    tech: ["Power BI", "Azure Data Lake", "SQL", "DAX"]
  }
]

const ProjectsSection = () => (
  <section id="projects" className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((proj, i) => (
        <div key={proj.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 group animate-fade-in" style={{animationDelay: `${i*150}ms`}}>
          <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover" />
          <div className="p-5">
            <h3 className="font-semibold text-lg text-primary mb-1">{proj.title}</h3>
            <p className="text-primary-dark text-sm mb-2">{proj.summary}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="bg-gradient-to-tr from-primary-light to-gradientVia text-white text-xs font-bold px-3 py-1 rounded-full shadow hover:opacity-80 transition">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default ProjectsSection;
