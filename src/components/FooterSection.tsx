
import { Linkedin, Github } from "lucide-react";

const FooterSection = () => (
  <footer className="w-full mt-16 py-8 bg-gradient-to-t from-primary-dark via-gradientFrom to-transparent flex flex-col items-center gap-4 text-white">
    <div className="flex gap-8">
      <a href="#" aria-label="Linkedin" className="hover-scale text-white hover:text-primary-light"><Linkedin size={28}/></a>
      <a href="#" aria-label="GitHub" className="hover-scale text-white hover:text-primary-light"><Github size={28}/></a>
    </div>
    <div className="text-xs">&copy; {new Date().getFullYear()} Siddhartha Subudhi. All rights reserved.</div>
    <div className="text-xs">Azure Data Engineer Portfolio</div>
  </footer>
);

export default FooterSection;
