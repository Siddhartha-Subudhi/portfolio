
import { useEffect, useRef } from "react";

const skills = [
  { name: "SQL", percent: 95, color: "from-primary to-primary-light", icon: "🗄️" },
  { name: "PySpark", percent: 85, color: "from-primary to-pink-400", icon: "⚡" },
  { name: "Azure Data Factory", percent: 90, color: "from-primary to-rose-400", icon: "🔗" },
  { name: "Azure Databricks", percent: 90, color: "from-primary to-orange-400", icon: "💎" },
  { name: "Azure Synapse", percent: 80, color: "from-primary to-cyan-400", icon: "🔷" },
  { name: "Power BI", percent: 70, color: "from-primary to-yellow-400", icon: "📊" },
  { name: "Python", percent: 75, color: "from-primary to-blue-400", icon: "🐍" }
];

const SkillsSection = () => {
  // Animate progress bars on scroll reveal
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.querySelectorAll<HTMLElement>(".skill-progress").forEach((el) => {
            const width = el.dataset.percent;
            el.style.width = width + "%";
            el.style.transition = "width 1.2s cubic-bezier(0.2,0.5,0.5,1)";
          });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Skills & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
        {skills.map(skill => (
          <div key={skill.name} className="flex items-center gap-4 animate-fade-in group">
            <span className="text-3xl rounded-full bg-gradient-to-tr from-primary to-pink-400 p-3 group-hover:scale-110 transition-transform duration-300 select-none shadow bg-opacity-80">{skill.icon}</span>
            <div className="flex-1">
              <span className="block font-semibold text-primary-dark mb-1">{skill.name}</span>
              <div className="relative w-full h-4 bg-primary/10 rounded-full overflow-hidden">
                <span
                  className={`skill-progress block absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: "0%" }}
                  data-percent={skill.percent}
                ></span>
                <span className="absolute right-3 top-0 text-xs h-full flex items-center font-bold text-primary-dark">{skill.percent}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default SkillsSection;
