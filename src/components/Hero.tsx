
import React from 'react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/49a8075b-fa28-437b-84f9-5104f83b3d02.png')`
        }}
      >
        <div className="absolute inset-0 bg-stone-50/60"></div>
      </div>
      
      {/* Traditional decorative elements */}
      <div className="absolute top-8 left-8 text-amber-600 opacity-20">
        <div className="text-6xl">🪔</div>
      </div>
      <div className="absolute top-8 right-8 text-amber-600 opacity-20">
        <div className="text-6xl">🪔</div>
      </div>
      <div className="absolute bottom-20 left-8 text-red-500 opacity-20">
        <div className="text-4xl">🌺</div>
      </div>
      <div className="absolute bottom-20 right-8 text-red-500 opacity-20">
        <div className="text-4xl">🌺</div>
      </div>
      
      <div className="relative z-10 text-center text-stone-800 max-w-4xl mx-auto px-4">
        <div className="mb-4 text-amber-600">
          <div className="text-2xl mb-2">🕉️</div>
          <p className="text-lg font-light tracking-wide">महाराष्ट्रीय विवाह फोटोग्राफी</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
          Capturing
          <span className="block font-medium text-stone-600">Maharashtrian</span>
          <span className="block font-light">Wedding Traditions</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-stone-600 animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
          Preserving sacred rituals and joyous celebrations forever
        </p>
        
        <button 
          onClick={scrollToServices}
          className="bg-stone-700 text-stone-50 px-8 py-3 rounded-sm text-lg font-light hover:bg-stone-800 transition-all duration-300 transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Explore Our Services
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
