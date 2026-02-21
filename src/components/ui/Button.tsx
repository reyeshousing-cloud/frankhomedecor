import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white' | 'minimal';
  to?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '' 
}) => {
  // Razor sharp, uppercase, tracked out
  const baseStyles = "inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gold-500 border border-black hover:border-gold-500",
    outline: "bg-transparent text-black border border-black/20 hover:border-black hover:bg-black hover:text-white",
    white: "bg-white text-black border border-white hover:bg-black hover:text-white hover:border-black",
    minimal: "bg-transparent text-black border-b border-black/20 hover:border-black px-0 py-2 hover:pl-4"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      onClick={onClick} 
      className={combinedClassName}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;
