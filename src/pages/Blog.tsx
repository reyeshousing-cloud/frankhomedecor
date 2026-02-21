import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Living Room Decor Ideas for 2024",
      excerpt: "Discover the latest trends in living room design, from color palettes to furniture arrangements that maximize comfort and style.",
      date: "October 15, 2024",
      author: "Frank Decor Team",
      category: "Design Tips",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Modern Interior Trends in Ghana",
      excerpt: "How local aesthetics are blending with international luxury standards to create unique Ghanaian modern interiors.",
      date: "September 28, 2024",
      author: "Sarah Mensah",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How to Make Small Rooms Look Bigger",
      excerpt: "Expert tips on using mirrors, lighting, and color to create the illusion of space in compact apartments.",
      date: "September 10, 2024",
      author: "Frank Decor Team",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-beige-50">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Blog" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Design Journal</h1>
          <p className="text-xl font-light tracking-wide text-gold-200">Inspiration, trends, and expert advice</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                  <span className="text-gold-500 uppercase tracking-widest font-medium">{post.category}</span>
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold-500 transition-colors leading-tight">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gold-500 transition-colors uppercase tracking-widest">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Blog;
