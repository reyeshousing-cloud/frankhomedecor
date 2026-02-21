import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 ${dark ? 'bg-gray-900 text-white' : 'bg-transparent'} ${className}`}
    >
      <div className="luxury-container">
        {children}
      </div>
    </section>
  );
};

export default Section;
