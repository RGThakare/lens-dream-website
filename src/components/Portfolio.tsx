
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'ceremony', name: 'Ceremony' },
    { id: 'reception', name: 'Reception' },
    { id: 'engagement', name: 'Engagement' },
    { id: 'details', name: 'Details' }
  ];

  const photos = [
    {
      id: 1,
      category: 'ceremony',
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Sacred Vows'
    },
    {
      id: 2,
      category: 'engagement',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Golden Hour Love'
    },
    {
      id: 3,
      category: 'reception',
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'First Dance'
    },
    {
      id: 4,
      category: 'details',
      src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wedding Rings'
    },
    {
      id: 5,
      category: 'ceremony',
      src: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Walking Down the Aisle'
    },
    {
      id: 6,
      category: 'reception',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Celebration'
    },
    {
      id: 7,
      category: 'details',
      src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wedding Bouquet'
    },
    {
      id: 8,
      category: 'engagement',
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Romantic Moments'
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-medium">Portfolio</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
            Every love story is unique, and we capture the moments that make yours unforgettable
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-sm text-sm font-light transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-stone-700 text-stone-50'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden aspect-square bg-stone-200 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-stone-50 font-light">{photo.title}</h3>
                  <p className="text-stone-200 text-sm capitalize font-light">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
