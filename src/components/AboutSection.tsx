
import ProfileAvatar from "./ProfileAvatar";
const AboutSection = () => (
  <section id="about" className="container mx-auto py-16 flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 flex justify-center items-center">
      <ProfileAvatar />
    </div>
    <div className="flex-1 flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-primary mb-3">About Me</h2>
      <p className="text-lg text-primary-dark animate-fade-in">
        Results-driven and detail-oriented Azure Data Engineer with 4.9 years of experience designing, implementing, and optimizing large-scale data solutions on the Azure platform.
        Adept in Azure Data Factory, Databricks, SQL Server, and real-time analytics with strong communication skills.
      </p>
      <div className="mt-5 flex gap-4">
        <a 
          href="/resume.pdf"
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow transition-transform hover:scale-105 hover:bg-primary-dark animate-fade-in"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
