
import React from 'react';
import { Camera, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-stone-50 relative">
      {/* Traditional border pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <div className="text-3xl mb-2">📿</div>
              <p className="text-amber-600 font-light tracking-wider">आमच्याबद्दल</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
              About <span className="font-medium text-amber-700">Us</span>
            </h2>
            
            <p className="text-stone-600 text-lg mb-6 leading-relaxed font-light">
              We are passionate Maharashtrian wedding photographers dedicated to capturing the sacred rituals 
              and authentic emotions of your special day. With over 8 years of experience documenting traditional 
              ceremonies from Sakhar Puda to Gruhapravesh, we understand the cultural significance of every moment.
            </p>
            
            <p className="text-stone-600 text-lg mb-8 leading-relaxed font-light">
              Our approach honors the sanctity of Maharashtrian traditions while creating beautiful, artistic images 
              that preserve your heritage forever. We specialize in capturing the divine moments of Mangalashtak, 
              the joy of Antarpat, and every precious ritual in between.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-amber-600 text-xl mb-2">🌺</div>
                <h3 className="text-stone-800 text-2xl font-medium mb-2">200+</h3>
                <p className="text-stone-600 font-light">Maharashtrian Weddings</p>
              </div>
              <div className="text-center">
                <div className="text-red-500 text-xl mb-2">🪔</div>
                <h3 className="text-stone-800 text-2xl font-medium mb-2">8+</h3>
                <p className="text-stone-600 font-light">Years of Tradition</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <Camera className="text-stone-600" size={20} />
                <span className="text-stone-700 font-light">Canon & Sony</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-stone-600" size={20} />
                <span className="text-stone-700 font-light">Sacred Stories</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded border-l-4 border-amber-500">
              <p className="text-stone-700 font-light italic text-center">
                "सर्व मंगल मांगल्ये शिवे सर्वार्थ साधिके"
              </p>
              <p className="text-stone-600 text-sm text-center mt-2">
                - Blessing every auspicious moment
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Traditional corner decorations */}
            <div className="absolute -top-4 -left-4 text-amber-500 text-2xl opacity-60">
              ✨
            </div>
            <div className="absolute -top-4 -right-4 text-red-500 text-2xl opacity-60">
              🌺
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Maharashtrian wedding photographer at work"
                className="w-full shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-800/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 text-amber-600 text-2xl opacity-60">
              🪔
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
    </section>
  );
};

export default About;
