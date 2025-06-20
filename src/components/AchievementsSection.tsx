
const achievements = [
  { name: "2x ‘A’ grade performer", icon: "🏆" },
  { name: "On The Spot Award", icon: "⚡" },
  { name: "Special Incentive Award (Saved $500K in licensing)", icon: "💰" },
  { name: "3-Year Service Commitment Recognition", icon: "🎖️" }
];

const AchievementsSection = () => (
  <section id="achievements" className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-primary mb-8">Achievements</h2>
    <div className="flex flex-wrap gap-7 items-center justify-center">
      {achievements.map((a, i) => (
        <div key={a.name} className="flex flex-col items-center bg-gradient-to-t from-primary-light to-gradientTo text-primary-dark rounded-full shadow-lg w-32 h-32 justify-center border-4 border-white animate-fade-in hover:scale-110 transition duration-300" style={{animationDelay: `${i*100}ms`}}>
          <span className="block text-4xl mb-3">{a.icon}</span>
          <span className="text-md font-semibold text-center">{a.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AchievementsSection;
