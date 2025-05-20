
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-card hover:bg-card/80 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
      <div className="text-highlight mb-4 p-3 bg-highlight/10 w-fit rounded-lg">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default ServiceCard;
