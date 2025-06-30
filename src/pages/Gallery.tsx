
import React, { useState } from 'react';
import { photos, categories } from '@/data/portfolioData';
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">
            Full <span className="font-medium">Gallery</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl font-light">
            Explore our complete collection of wedding photography moments
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="border-0 shadow-lg overflow-hidden bg-stone-100 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-stone-200 text-stone-700 text-xs font-light rounded-sm uppercase tracking-wider">
                      {photo.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-stone-800 mb-3">
                    {photo.title}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-600 font-light text-lg">
              No photos found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
