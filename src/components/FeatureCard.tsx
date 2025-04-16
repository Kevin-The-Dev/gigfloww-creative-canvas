
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: 'purple' | 'orange' | 'green' | 'blue';
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  color = 'purple',
  className,
  style
}) => {
  const colorVariants = {
    purple: 'bg-gigflow-pastel-purple border-gigflow-purple',
    orange: 'bg-gigflow-pastel-orange border-gigflow-accent-orange',
    green: 'bg-gigflow-pastel-green border-gigflow-accent-green',
    blue: 'bg-gigflow-pastel-blue border-gigflow-accent-blue'
  };

  return (
    <div 
      className={cn(
        "feature-card group",
        className
      )}
      style={style}
    >
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
        colorVariants[color]
      )}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
