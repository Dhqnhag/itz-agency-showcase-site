
import React, { useEffect, useRef } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = ''
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            titleRef.current.classList.add('animate-title-reveal');
          } else if (entry.target === subtitleRef.current) {
            subtitleRef.current.classList.add('animate-subtitle-reveal');
          } else if (entry.target === lineRef.current) {
            lineRef.current.classList.add('animate-line-reveal');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (lineRef.current) observer.observe(lineRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (lineRef.current) observer.unobserve(lineRef.current);
    };
  }, []);

  const alignClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };

  return (
    <div className={`mb-16 ${alignClass[align]} ${className}`}>
      <h2 
        ref={titleRef} 
        className="text-3xl md:text-5xl font-bold mb-3 relative inline-block opacity-0 translate-y-8"
      >
        <span className="text-highlight mr-2">—</span>{title}
        <span 
          ref={lineRef}
          className="absolute -bottom-2 left-0 w-0 h-1 bg-highlight rounded-full"
        ></span>
      </h2>
      {subtitle && (
        <p 
          ref={subtitleRef}
          className="text-foreground/80 text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-0"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
