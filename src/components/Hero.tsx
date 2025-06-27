
import React from 'react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-stone-50/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-stone-800 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
          Capturing
          <span className="block font-medium text-stone-600">Love Stories</span>
          <span className="block font-light">Forever</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-stone-600 animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
          Timeless wedding photography for your special day
        </p>
        
        <button 
          onClick={scrollToPortfolio}
          className="bg-stone-700 text-stone-50 px-8 py-3 rounded-sm text-lg font-light hover:bg-stone-800 transition-all duration-300 transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          View Our Work
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
