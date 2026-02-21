import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, description, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group bg-white p-6 hover:shadow-xl transition-all duration-500 border border-gray-100 ${className}`}
    >
      {image && (
        <div className="overflow-hidden mb-6 aspect-[4/3]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      )}
      {subtitle && <p className="text-gold-500 text-xs uppercase tracking-widest mb-2">{subtitle}</p>}
      <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-gold-500 transition-colors">{title}</h3>
      {description && <p className="text-gray-500 text-sm leading-relaxed">{description}</p>}
    </motion.div>
  );
};

export default Card;
