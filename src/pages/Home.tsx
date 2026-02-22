import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle, Instagram } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section - Editorial Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/mCsL6YSZ/7533207-hd-1280-720-60fps.gif" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover filter brightness-50 contrast-125"
          />
        </div>

        <div className="relative z-10 w-full luxury-container">
          <div className="max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-serif font-medium text-white mb-6 leading-[0.9] tracking-tight"
            >
              ELEGANCE <br />
              <span className="italic font-light opacity-80">REDEFINED</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-12 border-t border-white/20 pt-8"
            >
              <p className="text-sm md:text-base text-gray-300 max-w-md font-light tracking-wide leading-relaxed uppercase">
                Premium interior decoration in Ghana. <br/>
                Transforming spaces into architectural statements.
              </p>
              <div className="flex gap-4">
                <Button to="/portfolio" variant="white">View Projects</Button>
                <Button to="/contact" variant="outline" className="text-white border-white hover:bg-white hover:text-black">Get Estimate</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section className="py-32 border-b border-black/5">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black/5 border border-black/5">
            <div className="bg-white p-12 md:col-span-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">Services</h2>
                <h3 className="text-4xl font-serif leading-tight mb-6">Curated <br/>Design</h3>
              </div>
              <Button to="/services" variant="minimal">All Services</Button>
            </div>
            
            {[
              {
                title: "Interior Decoration",
                desc: "Full-service styling for residential and commercial spaces.",
                icon: "01"
              },
              {
                title: "Window Styling",
                desc: "Custom drapery and blinds to frame your view perfectly.",
                icon: "02"
              },
              {
                title: "Lighting Design",
                desc: "Sculptural lighting that defines the mood.",
                icon: "03"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-12 group hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer">
                <span className="block text-xs font-mono mb-8 opacity-50">{service.icon}</span>
                <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed max-w-[200px]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio - Masonry / Asymmetric */}
      <section className="py-32">
        <div className="luxury-container">
          <div className="flex justify-between items-end mb-16 border-b border-black/10 pb-8">
            <h2 className="text-5xl md:text-7xl font-serif">Selected Works</h2>
            <Link to="/portfolio" className="hidden md:flex items-center text-xs uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Feature */}
            <div className="md:col-span-8 relative group cursor-pointer">
              <div className="overflow-hidden aspect-[16/10]">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Project" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif">The Cantonments Residence</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Residential / Accra</p>
                </div>
                <span className="text-xs font-mono border border-black/20 px-2 py-1">2023</span>
              </div>
            </div>

            {/* Smaller Feature */}
            <div className="md:col-span-4 flex flex-col justify-end">
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4]">
                  <img 
                    src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Project" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-serif">Airport City Office</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Commercial / Accra</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
             {[
                "https://images.unsplash.com/photo-1600210491892-03d5450f3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              ].map((img, idx) => (
                <div key={idx} className="group cursor-pointer">
                   <div className="overflow-hidden aspect-square">
                    <img src={img} alt="Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                   </div>
                   <div className="mt-4 border-t border-black/10 pt-4">
                      <p className="text-xs font-mono text-gray-400">0{idx + 3}</p>
                   </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Brutalist List */}
      <section className="bg-black text-white py-32">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-serif mb-12 leading-tight">Precision in <br/>Every Detail</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                We don't just decorate; we curate. Our approach is rooted in architectural discipline and artistic expression.
              </p>
            </div>
            
            <div className="space-y-0 border-t border-white/20">
              {[
                "8+ Years Experience",
                "Global Sourcing",
                "Architectural Planning",
                "White Glove Service"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-8 border-b border-white/20 group cursor-pointer hover:bg-white/5 transition-colors px-4">
                  <span className="text-2xl font-light">{item}</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-32 bg-white">
        <div className="luxury-container">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-16 text-center text-gray-400">Client Perspectives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              {
                name: "Sarah Mensah",
                role: "East Legon",
                text: "The attention to detail is unmatched. They transformed my living room completely."
              },
              {
                name: "Kwame Osei",
                role: "CEO, TechStart",
                text: "Professional, timely, and incredibly talented. World-class service."
              },
              {
                name: "Ama Boateng",
                role: "Hotel Manager",
                text: "The best interior decor service in Accra. Flawless execution."
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-12 flex flex-col justify-between min-h-[300px]">
                <div className="text-gold-500 mb-6">★★★★★</div>
                <p className="text-xl font-serif leading-relaxed mb-8">"{review.text}"</p>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">{review.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Big Typography */}
      <section className="py-32 bg-gray-100 text-center">
        <div className="luxury-container">
          <h2 className="text-6xl md:text-8xl font-serif mb-8 text-black opacity-10">TRANSFORM</h2>
          <div className="-mt-12 relative z-10">
            <p className="text-xl mb-10 max-w-xl mx-auto font-light">
              Ready to elevate your space? Let's discuss your vision.
            </p>
            <Button to="/contact" variant="primary">Book Consultation</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
