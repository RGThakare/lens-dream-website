
import React from 'react';
import { Camera } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-amber-400">Me</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a passionate photographer with over 8 years of experience capturing the beauty 
              of our world. My journey began with a simple love for nature and has evolved into 
              a deep appreciation for all forms of visual storytelling.
            </p>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From breathtaking landscapes to intimate portraits, I believe every moment has a 
              story worth telling. My work focuses on finding the extraordinary in the ordinary, 
              creating images that resonate with emotion and authenticity.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-amber-400 text-2xl font-bold mb-2">500+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-amber-400 text-2xl font-bold mb-2">8+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Camera className="text-amber-400" size={24} />
              <span className="text-white font-semibold">Canon EOS R5 | Sony A7R IV</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Photographer at work"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
