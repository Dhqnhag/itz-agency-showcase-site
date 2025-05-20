
import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  const footerRef = useRef<HTMLDivElement>(null);
  const socialIcons = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
          
          if (entry.target === footerRef.current && socialIcons.current) {
            const icons = socialIcons.current.querySelectorAll('a');
            icons.forEach((icon, index) => {
              setTimeout(() => {
                icon.classList.add('animate-title-reveal');
              }, index * 150);
            });
          }
        }
      });
    }, observerOptions);
    
    if (footerRef.current) observer.observe(footerRef.current);
    
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className="py-12 bg-accent/5 border-t border-border/30 opacity-0 translate-y-10">
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
          
          <div ref={socialIcons} className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="opacity-0 p-2 rounded-full bg-card hover:bg-highlight/20 transition-all duration-300">
              <Github size={20} className="text-foreground/70 hover:text-highlight transition-colors" />
            </a>
            <a href="#" className="opacity-0 p-2 rounded-full bg-card hover:bg-highlight/20 transition-all duration-300">
              <Linkedin size={20} className="text-foreground/70 hover:text-highlight transition-colors" />
            </a>
            <a href="mailto:hello@reallygreatsite.com" className="opacity-0 p-2 rounded-full bg-card hover:bg-highlight/20 transition-all duration-300">
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
