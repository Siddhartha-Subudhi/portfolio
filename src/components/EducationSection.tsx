
const education = [
  {
    period: "2015 – 2019",
    degree: "B.Tech in EEE",
    institution: "Centurion University",
    details: "CGPA: 8.15"
  },
  {
    period: "2013 – 2015",
    degree: "12th",
    institution: "KV Cuttack",
    details: "75%"
  },
  {
    period: "2012 – 2013",
    degree: "10th",
    institution: "KV Cuttack",
    details: "CGPA: 9.6"
  }
];

const EducationSection = () => (
  <section id="education" className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-primary mb-8">Education</h2>
    <div className="timeline flex flex-col gap-10">
      {education.map((edu, i) => (
        <div key={edu.degree} className="flex md:flex-row flex-col items-center md:items-start gap-6 animate-fade-in" style={{animationDelay: `${i*100}ms`}}>
          <div className="w-36 flex flex-col items-center">
            <span className="bg-gradient-to-tr from-primary to-primary-light text-white py-2 px-4 rounded-full font-bold shadow">{edu.period}</span>
          </div>
          <div className="flex-1">
            <span className="block font-bold text-lg text-primary-dark">{edu.degree}</span>
            <span className="block text-primary">{edu.institution}</span>
            <span className="block text-sm text-primary/60">{edu.details}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
