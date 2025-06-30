
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Photo } from '@/data/portfolioData';
import LazyImage from './LazyImage';

interface FeaturedPhotoProps {
  photo: Photo;
}

const FeaturedPhoto: React.FC<FeaturedPhotoProps> = ({ photo }) => {
  return (
    <div className="mb-16">
      <Card className="overflow-hidden border-0 shadow-2xl bg-stone-100">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative">
              <LazyImage
                src={photo.src}
                alt={photo.title}
                aspectRatio="aspect-[4/3]"
                className="hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 to-transparent"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-stone-200 text-stone-700 text-sm font-light rounded-sm uppercase tracking-wider">
                  {photo.category}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
                {photo.title}
              </h3>
              <p className="text-stone-600 text-lg font-light leading-relaxed">
                {photo.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedPhoto;
