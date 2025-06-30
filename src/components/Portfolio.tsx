
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
    <section id="portfolio" className="py-20 bg-stone-50 relative">
      {/* Traditional border pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="text-4xl mb-2">🌺</div>
            <p className="text-amber-600 font-light tracking-wider">पोर्टफोलिओ</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Our <span className="font-medium text-amber-700">Portfolio</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light">
            From sacred Mangalashtak to joyous Antarpat - capturing every precious moment of your Maharashtrian wedding
          </p>
        </div>

        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {featuredPhoto && <FeaturedPhoto photo={featuredPhoto} />}

        <PhotoCarousel photos={galleryPhotos} />

        {/* Call to Action with traditional elements */}
        <div className="text-center mt-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-amber-500 text-2xl">
            ✨
          </div>
          <p className="text-stone-600 font-light mb-2">
            Ready to preserve your sacred wedding traditions?
          </p>
          <p className="text-stone-500 text-sm mb-6 italic">
            "सर्व मंगल मांगल्ये शिवे सर्वार्थ साधिके"
          </p>
          <Link 
            to="/gallery"
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-stone-50 px-8 py-3 rounded-sm font-light hover:from-amber-700 hover:to-amber-800 transition-all duration-300 inline-block shadow-lg"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
    </section>
  );
};

export default Portfolio;
