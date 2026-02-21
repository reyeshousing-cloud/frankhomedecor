import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const textColor = isHome && !isScrolled ? 'text-white' : 'text-black';
  const borderColor = isHome && !isScrolled ? 'border-white/20' : 'border-black/10';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white py-4 border-b border-black/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="luxury-container flex justify-between items-center">
        <Link to="/" className="z-50 group">
          <h1 className={`text-2xl font-display font-bold tracking-[0.15em] ${textColor} transition-colors duration-300`}>
            FRANK<span className="font-light opacity-70">DECOR</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] hover:opacity-50 transition-all duration-300 relative group ${
                location.pathname === link.path ? 'opacity-100' : 'opacity-70'
              } ${textColor}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link to="/shop" className={`relative group ${textColor}`}>
            <ShoppingBag className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-3 h-3 flex items-center justify-center rounded-none">0</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-3xl font-serif text-black hover:text-gold-500 transition-colors tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
