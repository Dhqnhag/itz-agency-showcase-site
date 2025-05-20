
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="py-12 bg-accent/5 border-t border-border/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-highlight">D</span>hanush H M
            </h3>
            <p className="text-sm text-foreground/70 mt-1">
              Digital Marketing & AI-Coding Expert
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="p-2 rounded-full bg-card hover:bg-highlight/20 transition-all duration-300">
              <Github size={20} className="text-foreground/70 hover:text-highlight transition-colors" />
            </a>
            <a href="#" className="p-2 rounded-full bg-card hover:bg-highlight/20 transition-all duration-300">
              <Linkedin size={20} className="text-foreground/70 hover:text-highlight transition-colors" />
            </a>
            <a href="mailto:hello@reallygreatsite.com" className="p-2 rounded-full bg-card hover:bg-highlight/20 transition-all duration-300">
              <Mail size={20} className="text-foreground/70 hover:text-highlight transition-colors" />
            </a>
          </div>
          
          <div className="text-sm text-foreground/70">
            © {year} Dhanush H M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
