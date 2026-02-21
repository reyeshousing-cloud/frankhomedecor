import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import { motion, AnimatePresence } from 'motion/react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Living Rooms', 'Bedrooms', 'Office Interiors', 'Luxury Apartments', 'Hotel Decor'];

  const projects = [
    {
      title: "Modern Minimalist Living",
      category: "Living Rooms",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Serene Master Suite",
      category: "Bedrooms",
      img: "https://images.unsplash.com/photo-1616594039964-40891a909d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Executive Office Space",
      category: "Office Interiors",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Penthouse Luxury",
      category: "Luxury Apartments",
      img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Boutique Hotel Lobby",
      category: "Hotel Decor",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Contemporary Lounge",
      category: "Living Rooms",
      img: "https://images.unsplash.com/photo-1600210491892-03d5450f3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cozy Guest Room",
      category: "Bedrooms",
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Creative Studio",
      category: "Office Interiors",
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Skyline Apartment",
      category: "Luxury Apartments",
      img: "https://images.unsplash.com/photo-1512918760383-5658fa5180ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="bg-beige-50">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Portfolio" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl font-light tracking-wide text-gold-200">A showcase of our finest work</p>
        </div>
      </div>

      <Section className="bg-white">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gold-500 text-white shadow-lg' 
                  : 'bg-beige-100 text-gray-600 hover:bg-gold-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={index}
                className="group relative overflow-hidden rounded-sm shadow-md cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-gold-500 text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-serif font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
};

export default Portfolio;
