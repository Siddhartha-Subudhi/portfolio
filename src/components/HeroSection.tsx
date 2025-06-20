
import { Linkedin, Github, ArrowDown } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

const HeroSection = () => (
  <section id="home" className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 mx-auto container py-12 relative">
    {/* Hero blob background */}
    <div className="absolute z-0 inset-0 flex justify-end pointer-events-none">
      <svg width="500" height="600" className="absolute right-0 top-[-80px] opacity-60" viewBox="0 0 375 440" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:0}}>
        <defs>
          <radialGradient id="g1" cx="60%" cy="40%" r="120%" gradientTransform="rotate(15)">
            <stop offset="0%" stopColor="#d7263d"/>
            <stop offset="85%" stopColor="#fff0f3"/>
          </radialGradient>
        </defs>
        <ellipse cx="240" cy="200" rx="210" ry="160" fill="url(#g1)" />
      </svg>
    </div>

    <div className="flex-1 z-10 flex flex-col items-start justify-center md:pr-20">
      <div className="mb-3">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-primary-dark animate-fade-in" style={{animationDelay: "0ms"}}>
          <span className="block mb-2 text-primary">Hi, I’m</span>
          <span className="block">Siddhartha Subudhi</span>
        </h1>
        <h2 className="mt-2 text-xl md:text-2xl font-semibold text-primary-dark/80 animate-fade-in" style={{animationDelay:'300ms'}}>
          Azure Data Engineer&nbsp;|&nbsp;SQL DBA&nbsp;|&nbsp;Cloud Architect
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-4 animate-fade-in" style={{animationDelay:'700ms'}}>
          <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow transition-transform hover:scale-105 hover:bg-primary-dark animate-fade-in">Contact Me</a>
          <a 
            href="/resume.pdf"
            className="ml-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full bg-white hover:bg-primary hover:text-white transition-colors animate-fade-in"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="mt-7 flex gap-6 items-center">
          <a href="#" aria-label="Linkedin" className="hover-scale text-primary"><Linkedin size={32}/></a>
          <a href="#" aria-label="GitHub" className="hover-scale text-primary"><Github size={32}/></a>
        </div>
      </div>
    </div>
    <div className="flex-1 z-10 flex justify-center items-center relative pb-8 md:pb-0">
      <ProfileAvatar />
    </div>
    <div className="absolute left-1/2 bottom-3 md:bottom-10 md:left-[8%] -translate-x-1/2 flex flex-col items-center animate-bounce pointer-events-none">
      <ArrowDown className="text-primary" size={32}/>
      <span className="text-muted text-sm mt-1 tracking-wide">Scroll Down</span>
    </div>
  </section>
);

export default HeroSection;
