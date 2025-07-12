import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { photos, categories } from '@/data/portfolioData';
import LazyImage from '@/components/portfolio/LazyImage';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';

const SectionPage = () => {
  const { sectionId } = useParams();
  
  const category = categories.find(cat => cat.id === sectionId);
  const sectionPhotos = photos.filter(photo => photo.category === sectionId);

  if (!category) {
    return (
      <div className="min-h-screen bg-stone-50 py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-stone-800 mb-4">Section not found</h1>
          <Link to="/" className="text-amber-700 hover:text-amber-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-16 relative">
      {/* Traditional border pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-8">
            <div className="text-4xl mb-2">
              {category.id === 'prewedding' ? '💕' : 
               category.id === 'wedding' ? '👰' : 
               category.id === 'reception' ? '🎉' : 
               category.id === 'haldi' ? '🌺' : '📸'}
            </div>
            <p className="text-amber-600 font-light tracking-wider">
              {category.id === 'prewedding' ? 'प्री-वेडिंग' : 
               category.id === 'wedding' ? 'विवाह' : 
               category.id === 'reception' ? 'रिसेप्शन' : 
               category.id === 'haldi' ? 'हल्दी' : 'फोटोग्राफी'}
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-6 text-center">
            {category.name} <span className="font-medium text-amber-700">Gallery</span>
          </h1>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-lg bg-stone-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-light text-stone-800 mb-4 text-center">
                The Story
              </h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed text-center">
                {category.story}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionPhotos.map((photo) => (
            <Card key={photo.id} className="border-0 shadow-lg overflow-hidden bg-stone-100 hover:shadow-xl transition-shadow duration-300 relative">
              <CardContent className="p-0">
                <div className="relative group">
                  <LazyImage
                    src={photo.src}
                    alt={photo.title}
                    aspectRatio="aspect-[4/3]"
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/20 transition-colors duration-300"></div>
                  {/* Traditional corner decoration */}
                  <div className="absolute top-2 right-2 text-amber-500 opacity-60 text-sm">
                    ✨
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-light rounded-sm uppercase tracking-wider border border-amber-200">
                      {photo.category}
                    </span>
                    <div className="text-red-400 text-xs">🌺</div>
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
        {sectionPhotos.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🙏</div>
            <p className="text-stone-600 font-light text-lg">
              No photos found in this section yet.
            </p>
          </div>
        )}
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500"></div>
    </div>
  );
};

export default SectionPage;