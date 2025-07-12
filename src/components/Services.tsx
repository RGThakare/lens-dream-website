
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Image, Sparkles, Crown, Users } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Heart className="text-amber-600" size={40} />,
      title: 'Wedding Photography',
      subtitle: 'विवाह फोटोग्राफी',
      description: 'Complete wedding day coverage capturing every sacred ritual and precious moment from Haldi to Gruhapravesh.',
      features: ['Full day coverage', 'Traditional ceremonies', 'Family portraits', 'Candid moments'],
      color: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      delay: '0s'
    },
    {
      icon: <Crown className="text-purple-600" size={40} />,
      title: 'Pre-Wedding Shoot',
      subtitle: 'प्री-वेडिंग शूट',
      description: 'Romantic engagement sessions showcasing your love story in beautiful locations with traditional and modern themes.',
      features: ['Location scouting', 'Outfit consultation', 'Props & styling', 'Creative concepts'],
      color: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      delay: '0.2s'
    },
    {
      icon: <Users className="text-orange-600" size={40} />,
      title: 'Reception Coverage',
      subtitle: 'रिसेप्शन कवरेज',
      description: 'Dedicated coverage of your reception celebrations, capturing the joy, laughter, and memorable moments.',
      features: ['Party atmosphere', 'Guest interactions', 'Live performances', 'Emotional moments'],
      color: 'from-orange-50 to-yellow-50',
      borderColor: 'border-orange-200',
      delay: '0.4s'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 text-amber-400/20 animate-float">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-10 right-10 text-red-400/20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles size={40} />
      </div>
      
      {/* Traditional border pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="mb-6">
            <div className="text-4xl mb-2">🙏</div>
            <p className="text-amber-600 font-light tracking-wider">सेवाएं</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-medium text-amber-700">Services</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
            Comprehensive photography services to capture every sacred moment of your Maharashtrian wedding journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-gradient-to-br ${service.color} p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${service.borderColor} overflow-hidden ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: service.delay }}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-2 right-2 text-amber-400/30 group-hover:text-amber-400/60 transition-colors duration-300">
                <div className="text-lg">✨</div>
              </div>
              <div className="absolute bottom-2 left-2 text-red-400/30 group-hover:text-red-400/60 transition-colors duration-300">
                <div className="text-sm">🌺</div>
              </div>
              
              {/* Icon with glow effect */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-white/70 flex items-center justify-center group-hover:animate-glow">
                  {service.icon}
                </div>
              </div>
              
              <div className="mb-2">
                <h3 className="text-xl font-medium text-stone-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-amber-700 text-sm font-light italic">
                  {service.subtitle}
                </p>
              </div>
              
              <p className="text-stone-600 font-light mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-stone-600 font-light flex items-center group-hover:text-stone-700 transition-colors duration-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 border border-amber-200">
            <div className="text-3xl mb-4">🪔</div>
            <h3 className="text-2xl font-light text-stone-800 mb-3">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-stone-600 font-light mb-6 italic">
              "शुभ विवाह - जीवन का सबसे सुंदर क्षण"
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-light hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
    </section>
  );
};

export default Services;
