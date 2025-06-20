
const certs = [
  {
    title: "Microsoft DP-900: Azure Fundamentals",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
  },
  {
    title: "Microsoft DP-203: Data Engineering on Azure",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png"
  },
  {
    title: "Databricks Lakehouse Platform Fundamentals",
    logo: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
  }
];

const CertificationsSection = () => (
  <section id="certifications" className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-primary mb-8">Certifications</h2>
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {certs.map(c => (
        <div key={c.title} className="bg-white bg-opacity-80 rounded-lg flex flex-col items-center px-7 py-8 shadow transition hover:scale-105 animate-fade-in">
          <img src={c.logo} alt={c.title + " logo"} className="w-14 h-14 object-contain mb-4" />
          <span className="font-semibold text-primary-dark text-center">{c.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
