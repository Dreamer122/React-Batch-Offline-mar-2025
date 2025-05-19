import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection= () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="container-custom py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Insights for the <span className="text-accent-400">Modern</span> Thinker
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            Thought-provoking articles on technology, design, business, and lifestyle 
            curated for curious minds and forward thinkers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
              Start Reading
            </button>
            <button className="flex items-center justify-center text-white font-medium py-2 px-6 rounded-md border border-white/30 hover:bg-white/10 transition-all duration-200">
              Subscribe <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      <div className="absolute -bottom-px left-0 w-full h-1 bg-gray-50"></div>
    </section>
  );
};

export default HeroSection;