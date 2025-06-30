
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Photo } from '@/data/portfolioData';

interface PhotoCarouselProps {
  photos: Photo[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo) => (
            <CarouselItem key={photo.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="border-0 shadow-lg overflow-hidden bg-stone-100 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/40 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/80 to-transparent text-stone-50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-light text-lg mb-1">{photo.title}</h3>
                      <p className="text-stone-200 text-sm font-light capitalize">
                        {photo.category}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-stone-100/90 border-stone-200 hover:bg-stone-200" />
        <CarouselNext className="right-4 bg-stone-100/90 border-stone-200 hover:bg-stone-200" />
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
