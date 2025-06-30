
import React, { useState, useMemo } from 'react';
import { photos, categories } from '@/data/portfolioData';
import CategoryFilter from './portfolio/CategoryFilter';
import FeaturedPhoto from './portfolio/FeaturedPhoto';
import PhotoCarousel from './portfolio/PhotoCarousel';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Shuffle function
  const shuffleArray = (array: typeof photos) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Memoized shuffled and filtered photos
  const filteredPhotos = useMemo(() => {
    const filtered = activeCategory === 'all' 
      ? photos 
      : photos.filter(photo => photo.category === activeCategory);
    return shuffleArray(filtered);
  }, [activeCategory]);

  // Featured photo (first one) for hero-style display
  const featuredPhoto = filteredPhotos[0];
  const galleryPhotos = filteredPhotos.slice(1);

  return (
    <section id="portfolio" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-medium">Portfolio</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
            Every love story is unique, and we capture the moments that make yours unforgettable
          </p>
        </div>

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {featuredPhoto && <FeaturedPhoto photo={featuredPhoto} />}

        <PhotoCarousel photos={galleryPhotos} />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-stone-600 font-light mb-6">
            Ready to create your own unforgettable moments?
          </p>
          <button className="bg-stone-700 text-stone-50 px-8 py-3 rounded-sm font-light hover:bg-stone-800 transition-colors duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
