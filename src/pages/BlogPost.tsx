import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API or CMS
  const post = {
    title: "Top 10 Living Room Decor Ideas for 2024",
    date: "October 15, 2024",
    author: "Frank Decor Team",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    content: `
      <p class="mb-6">The living room is the heart of the home, a space for relaxation and entertainment. As we move into 2024, interior design trends are shifting towards comfort, sustainability, and personal expression.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">1. Sustainable Materials</h2>
      <p class="mb-6">Eco-friendly materials are no longer just a trend; they are a necessity. Look for furniture made from reclaimed wood, bamboo, and recycled metals. Natural fabrics like organic cotton, linen, and wool are also gaining popularity for upholstery and curtains.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">2. Warm Earth Tones</h2>
      <p class="mb-6">Say goodbye to sterile gray interiors. 2024 is all about warm, inviting colors. Think terracotta, olive green, warm beige, and rust orange. These hues create a cozy atmosphere that feels grounded and natural.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">3. Statement Lighting</h2>
      <p class="mb-6">Lighting is becoming a focal point in living room design. Oversized pendant lights, sculptural floor lamps, and vintage chandeliers are excellent ways to add personality and drama to your space.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">4. Biophilic Design</h2>
      <p class="mb-6">Bringing the outdoors in continues to be a major theme. Incorporate large indoor plants, maximize natural light, and use natural textures to create a connection with nature.</p>
      
      <h2 class="text-2xl font-serif font-bold mb-4 mt-8">5. Curved Furniture</h2>
      <p class="mb-6">Soft, rounded edges are replacing sharp lines. Curved sofas, round coffee tables, and arched doorways add a sense of flow and softness to the room.</p>
    `
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      <div className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 opacity-50">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="flex items-center justify-center space-x-4 text-sm mb-4">
            <span className="bg-gold-500 px-3 py-1 text-white uppercase tracking-widest text-xs font-medium">{post.category}</span>
            <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center justify-center space-x-2 text-gold-200">
            <User size={16} />
            <span>By {post.author}</span>
          </div>
        </div>
      </div>

      <Section className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center text-gold-500 hover:text-gold-600 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>
        
        <div 
          className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-2xl font-serif font-bold mb-6">Share this article</h3>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'Pinterest', 'LinkedIn'].map((social) => (
              <button key={social} className="px-6 py-2 border border-gray-200 text-gray-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 text-sm uppercase tracking-widest">
                {social}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default BlogPost;
