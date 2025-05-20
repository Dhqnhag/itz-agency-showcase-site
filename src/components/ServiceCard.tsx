
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-card hover:bg-card/90 rounded-xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 relative overflow-hidden group">
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
