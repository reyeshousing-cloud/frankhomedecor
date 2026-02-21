import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="luxury-container grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold tracking-wider">
            FRANK <span className="text-gold-500">HOME DECOR</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Transforming spaces into elegant living environments since 2016. The premier destination for luxury interior decoration in Ghana.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-500 transition-colors group">
              <Instagram size={18} className="text-gray-400 group-hover:text-white" />
            </a>
            <a href="mailto:info@frankhomedecor.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold-500 transition-colors group">
              <Mail size={18} className="text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif mb-6 text-gold-500">Quick Links</h3>
          <ul className="space-y-4">
            {['About Us', 'Our Services', 'Portfolio', 'Shop', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-gold-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-serif mb-6 text-gold-500">Services</h3>
          <ul className="space-y-4">
            {['Interior Decoration', 'Curtains & Blinds', 'Wallpaper Installation', 'Lighting Design', 'Furniture Styling'].map((item) => (
              <li key={item} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-serif mb-6 text-gold-500">Contact Us</h3>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-400">Dansoman, Accra, Ghana</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-gold-500 flex-shrink-0" size={20} />
              <span className="text-gray-400">+233 55 012 0621</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="text-gold-500 flex-shrink-0" size={20} />
              <span className="text-gray-400">info@frankhomedecor.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="luxury-container pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Frank Home Decor. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
