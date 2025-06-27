
import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'nature', name: 'Nature' },
    { id: 'urban', name: 'Urban' }
  ];

  const photos = [
    {
      id: 1,
      category: 'landscape',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Mountain Vista'
    },
    {
      id: 2,
      category: 'nature',
      src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Forest Path'
    },
    {
      id: 3,
      category: 'landscape',
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Misty Mountains'
    },
    {
      id: 4,
      category: 'nature',
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Ocean Waves'
    },
    {
      id: 5,
      category: 'landscape',
      src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Alpine Beauty'
    },
    {
      id: 6,
      category: 'urban',
      src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'City Lights'
    },
    {
      id: 7,
      category: 'nature',
      src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Towering Trees'
    },
    {
      id: 8,
      category: 'portrait',
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Creative Portrait'
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-amber-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of moments captured through my lens, each telling its own unique story
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-400 text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
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
              className="group relative overflow-hidden rounded-lg aspect-square bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-semibold">{photo.title}</h3>
                  <p className="text-gray-300 text-sm capitalize">{photo.category}</p>
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
