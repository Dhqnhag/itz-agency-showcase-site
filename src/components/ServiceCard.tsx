
import React, { useRef, useEffect } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('card-reveal');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-gradient-to-br from-accent/90 to-accent/40 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/10 relative overflow-hidden group opacity-0 translate-y-12"
    >
      {/* Background elements */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-highlight/20 rounded-full blur-lg"></div>
      
      {/* Icon with enhanced styling */}
      <div className="text-white mb-5 p-5 bg-white/20 backdrop-blur-sm w-fit rounded-xl group-hover:scale-110 transition-transform duration-300 relative overflow-hidden btn-shine">
        {icon}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-highlight transition-colors duration-300">{title}</h3>
      <p className="text-white/80">{description}</p>
      
      {/* Service button */}
      <button className="mt-6 px-4 py-2 bg-white/10 text-white text-sm rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-2 group/btn overflow-hidden relative btn-shine">
        <span>Learn more</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover/btn:translate-x-1 transition-transform duration-300"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;
