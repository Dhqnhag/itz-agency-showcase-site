
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
      className="bg-card hover:bg-card/90 rounded-xl p-7 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 relative overflow-hidden group opacity-0 translate-y-12"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      {/* Icon with enhanced styling */}
      <div className="text-highlight mb-5 p-4 bg-highlight/10 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-highlight transition-colors duration-300">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default ServiceCard;
