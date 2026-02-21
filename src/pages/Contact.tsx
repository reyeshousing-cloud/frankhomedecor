import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-beige-50">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Get in Touch</h1>
          <p className="text-xl font-light tracking-wide text-gold-200">Let's start your design journey</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-sm font-medium">Contact Us</span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-8 text-gray-900">Visit Our Studio</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We'd love to hear from you. Whether you have a question about our services, need a consultation, or just want to say hello, our team is ready to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center text-gold-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Our Location</h4>
                  <p className="text-gray-600">Dansoman, Accra, Ghana</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center text-gold-500 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Phone Number</h4>
                  <p className="text-gray-600">+233 55 012 0621</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Sat 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center text-gold-500 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Email Address</h4>
                  <p className="text-gray-600">info@frankhomedecor.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-beige-50 p-10 rounded-sm shadow-lg border border-gold-100">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="+233 ..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button variant="primary" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
        
        {/* Map Embed */}
        <div className="mt-20 h-[400px] w-full bg-gray-200 rounded-sm overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.970123456789!2d-0.25!3d5.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sDansoman%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Frank Home Decor Location"
          ></iframe>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
