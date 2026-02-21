import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ShoppingBag } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Velvet Curtain Set",
      price: "GHS 1,200",
      category: "Curtains",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Abstract Gold Wall Art",
      price: "GHS 850",
      category: "Wall Art",
      image: "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Modern Table Lamp",
      price: "GHS 450",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1507473888900-52e1adad5420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Luxury Throw Pillow",
      price: "GHS 150",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Geometric Rug",
      price: "GHS 2,500",
      category: "Flooring",
      image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Ceramic Vase Set",
      price: "GHS 320",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Accent Armchair",
      price: "GHS 3,800",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Brass Pendant Light",
      price: "GHS 950",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-beige-50">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Shop" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">The Shop</h1>
          <p className="text-xl font-light tracking-wide text-gold-200">Curated decor for your home</p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button variant="primary" className="w-full text-xs py-3">
                    Add to Cart
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShoppingBag size={18} className="text-gray-900" />
                </div>
              </div>
              <div>
                <p className="text-xs text-gold-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-gold-500 transition-colors">{product.name}</h3>
                <p className="text-gray-600 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Shop;
