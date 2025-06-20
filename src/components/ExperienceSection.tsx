
import { ArrowUp } from "lucide-react";

const jobs = [
  {
    company: "TCS",
    title: "Azure Data Engineer",
    period: "Nov 2021 – Present",
    points: [
      "Built and optimized end-to-end pipelines in ADF",
      "Migrated SQL Server DBs to Azure",
      "Improved data processing by 40% using Databricks",
      "Designed dashboards using Power BI"
    ]
  },
  {
    company: "TCS",
    title: "SQL Server DBA",
    period: "Aug 2019 – Oct 2021",
    points: [
      "Administered SQL Servers (2012–2019)",
      "Implemented HA/DR",
      "Managed backups with Azure Blob Storage"
    ]
  }
];

const ExperienceSection = () => (
  <section id="experience" className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-primary mb-8">Experience</h2>
    <div className="space-y-12">
      {jobs.map((job, i) => (
        <div
          key={i}
          className="relative bg-white bg-opacity-90 rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start animate-fade-in"
          style={{ animationDelay: `${i * 200}ms` }}
        >
          <div className="flex flex-col items-center md:w-1/4">
            <span className="bg-gradient-to-r from-primary to-primary-light rounded-lg px-4 py-2 font-semibold text-white shadow mb-2">{job.company}</span>
            <span className="font-bold text-lg text-primary-dark">{job.title}</span>
            <span className="text-xs text-primary">{job.period}</span>
          </div>
          <ul className="ml-0 md:ml-8 flex-1 list-disc text-primary-dark">
            {job.points.map((p, k) => (
              <li key={k} className="mb-2">{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
export default ExperienceSection;
