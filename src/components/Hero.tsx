
import React from 'react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Capturing
          <span className="block text-amber-400">Moments</span>
          <span className="block">in Time</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Professional photography that tells your story
        </p>
        
        <button 
          onClick={scrollToPortfolio}
          className="bg-amber-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          View Portfolio
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
