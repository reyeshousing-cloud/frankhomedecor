import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="bg-beige-50">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="About Frank Home Decor" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <p className="text-xl font-light tracking-wide text-gold-200">Crafting elegance since 2016</p>
        </div>
      </div>

      {/* Company Story */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 uppercase tracking-widest text-sm font-medium">Established 2016</span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-6 text-gray-900">A Legacy of Luxury</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Frank Home Decor began with a simple vision: to bring world-class interior design standards to homes and businesses in Ghana. 
              Founded in Dansoman, Accra, we started as a small boutique specializing in curtains and have grown into a full-service interior decoration firm.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the past 8 years, we have had the privilege of transforming hundreds of spaces, from luxury apartments in Cantonments to corporate offices in Airport City. 
              Our commitment to quality materials and impeccable craftsmanship remains the cornerstone of our brand.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-gold-500 transform translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Workshop" 
              className="w-full h-auto object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-beige-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Our Mission",
              desc: "To create inspiring living spaces that blend functionality with timeless elegance, enhancing the quality of life for our clients."
            },
            {
              title: "Our Vision",
              desc: "To be the undisputed leader in luxury interior decoration across West Africa, known for innovation and excellence."
            },
            {
              title: "Our Philosophy",
              desc: "We believe that every detail matters. From the texture of a curtain to the placement of a lamp, everything must harmonize."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-gold-500"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
