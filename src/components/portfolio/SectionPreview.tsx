import React from 'react';
import { Link } from 'react-router-dom';
import { Category, Photo } from '@/data/portfolioData';
import LazyImage from './LazyImage';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

interface SectionPreviewProps {
  category: Category;
  photos: Photo[];
}

const SectionPreview: React.FC<SectionPreviewProps> = ({ category, photos }) => {
  // Get first 3 photos for preview
  const previewPhotos = photos.slice(0, 3);

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-stone-100">
      <CardContent className="p-0">
        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-1 h-48">
          {previewPhotos.map((photo, index) => (
            <div key={photo.id} className={`relative overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}>
              <LazyImage
                src={photo.src}
                alt={photo.title}
                aspectRatio="aspect-square"
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">
                {category.id === 'prewedding' ? '💕' : 
                 category.id === 'wedding' ? '👰' : 
                 category.id === 'reception' ? '🎉' : 
                 category.id === 'haldi' ? '🌺' : '📸'}
              </span>
              <h3 className="text-2xl font-light text-stone-800">
                {category.name}
              </h3>
            </div>
            <span className="text-amber-600 text-xs font-light tracking-wider uppercase">
              {photos.length} Photos
            </span>
          </div>
          
          <p className="text-stone-600 font-light mb-4 leading-relaxed">
            {category.description}
          </p>

          <Link 
            to={`/section/${category.id}`}
            className="inline-flex items-center text-amber-700 hover:text-amber-800 font-light transition-colors group-hover:translate-x-1 transition-transform duration-300"
          >
            View Gallery
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionPreview;