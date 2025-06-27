
import React from 'react';
import { Camera, Heart, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="text-stone-600" size={32} />,
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage capturing every precious moment from preparation to celebration.',
      features: ['Full day coverage', 'Edited gallery', 'Print release', 'Online gallery']
    },
    {
      icon: <Camera className="text-stone-600" size={32} />,
      title: 'Pre-Wedding Shoot',
      description: 'Romantic engagement sessions to tell your love story before the big day.',
      features: ['Location scouting', '2-hour session', 'Wardrobe consultation', 'Digital gallery']
    },
    {
      icon: <Image className="text-stone-600" size={32} />,
      title: 'Reception Coverage',
      description: 'Dedicated coverage of your reception celebrations, speeches, and dancing.',
      features: ['Reception highlights', 'Candid moments', 'Guest interactions', 'Party atmosphere']
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-medium">Services</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
            Comprehensive photography services to capture every moment of your love story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-stone-100 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-medium text-stone-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-stone-600 font-light mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-stone-600 font-light flex items-center">
                    <span className="w-2 h-2 bg-stone-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
