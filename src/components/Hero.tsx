
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 to-amber-50/30">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `url('/lovable-uploads/49a8075b-fa28-437b-84f9-5104f83b3d02.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/70 via-amber-50/60 to-orange-50/70"></div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-8 left-8 text-amber-500 opacity-40 animate-float">
        <div className="text-6xl">🪔</div>
      </div>
      <div className="absolute top-8 right-8 text-amber-500 opacity-40 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-6xl">🪔</div>
      </div>
      <div className="absolute bottom-20 left-8 text-red-400 opacity-40 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-5xl">🌺</div>
      </div>
      <div className="absolute bottom-20 right-8 text-red-400 opacity-40 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-5xl">🌺</div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 text-amber-300 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
        <div className="text-2xl">✨</div>
      </div>
      <div className="absolute top-1/3 right-1/3 text-orange-300 opacity-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="text-xl">💫</div>
      </div>
      
      <div className="relative z-10 text-center text-stone-800 max-w-5xl mx-auto px-4">
        <div className={`mb-6 transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-3xl mb-3 animate-float">🕉️</div>
          <p className="text-lg font-light tracking-wide text-amber-700 bg-white/80 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
            महाराष्ट्रीय विवाह फोटोग्राफी
          </p>
        </div>
        
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light mb-8 transition-all duration-1200 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <span className="block bg-gradient-to-r from-stone-800 to-amber-700 bg-clip-text text-transparent">
            Capturing
          </span>
          <span className="block font-medium text-stone-600 transform hover:scale-105 transition-transform duration-300">
            Maharashtrian
          </span>
          <span className="block font-light bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Wedding Traditions
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-10 text-stone-600 font-light leading-relaxed transition-all duration-1000 ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          Preserving sacred rituals and joyous celebrations with 
          <span className="text-amber-700 font-medium"> artistic excellence</span>
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <button 
            onClick={scrollToServices}
            className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-light hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden"
          >
            <span className="relative z-10">Explore Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-stone-700 text-stone-700 px-10 py-4 rounded-full text-lg font-light hover:bg-stone-700 hover:text-white transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            View Portfolio
          </button>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'animate-bounce' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
        <button 
          onClick={scrollToServices}
          className="group flex flex-col items-center text-stone-600 hover:text-amber-600 transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6 mb-2 animate-bounce" />
          <span className="text-xs font-light tracking-wider uppercase">Scroll Down</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
