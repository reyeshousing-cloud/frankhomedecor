import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import { motion } from 'motion/react';

const Services = () => {
  const services = [
    {
      title: "Full Interior Decoration",
      desc: "From concept to completion, we handle every aspect of your interior transformation. Our team works with you to select color palettes, furniture, and accessories that reflect your personal style.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Project Management"],
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Curtains & Window Styling",
      desc: "Windows are the eyes of your home. We provide custom-made curtains, blinds, and shades using premium fabrics sourced from around the world. Our installation is precise and professional.",
      features: ["Custom Drapery", "Roman Blinds", "Motorized Systems", "Professional Installation"],
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Wallpaper & Wall Panels",
      desc: "Transform plain walls into stunning focal points. We offer a wide range of luxury wallpapers and 3D wall panels that add texture, depth, and sophistication to any room.",
      features: ["Luxury Wallpapers", "3D Wall Panels", "Feature Walls", "Textured Finishes"],
      img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Lighting Design",
      desc: "Lighting sets the mood. We design lighting schemes that enhance the ambiance of your space, combining functional illumination with decorative fixtures.",
      features: ["Chandeliers", "Ambient Lighting", "Task Lighting", "Smart Lighting Solutions"],
      img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Our Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-xl font-light tracking-wide text-gold-200">Comprehensive design solutions for every space</p>
        </div>
      </div>

      <div className="py-20">
        {services.map((service, index) => (
          <Section key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-beige-50'}>
            <div className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <span className="text-gold-500 uppercase tracking-widest text-sm font-medium">Service {index + 1}</span>
                <h2 className="text-4xl font-serif font-bold mt-3 mb-6 text-gray-900">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{service.desc}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-gray-700">
                      <span className="w-2 h-2 bg-gold-500 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 relative group overflow-hidden shadow-2xl rounded-sm"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none" />
              </motion.div>
            </div>
          </Section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
