
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
      title: 'Sacred Vows',
      description: 'Capturing the most intimate moments of your ceremony'
    },
    {
      id: 2,
      category: 'engagement',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Golden Hour Love',
      description: 'Pre-wedding magic in the perfect light'
    },
    {
      id: 3,
      category: 'reception',
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'First Dance',
      description: 'Dancing into forever together'
    },
    {
      id: 4,
      category: 'details',
      src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wedding Rings',
      description: 'The little details that tell your story'
    },
    {
      id: 5,
      category: 'ceremony',
      src: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Walking Down the Aisle',
      description: 'The moment everything begins'
    },
    {
      id: 6,
      category: 'reception',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Celebration',
      description: 'Joy and laughter filling the air'
    },
    {
      id: 7,
      category: 'details',
      src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wedding Bouquet',
      description: 'Beauty in every petal'
    },
    {
      id: 8,
      category: 'engagement',
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Romantic Moments',
      description: 'Love captured in its purest form'
    }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

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

        {/* Featured Image */}
        {featuredPhoto && (
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-2xl bg-stone-100">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={featuredPhoto.src}
                      alt={featuredPhoto.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-stone-200 text-stone-700 text-sm font-light rounded-sm uppercase tracking-wider">
                        {featuredPhoto.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
                      {featuredPhoto.title}
                    </h3>
                    <p className="text-stone-600 text-lg font-light leading-relaxed">
                      {featuredPhoto.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Carousel Gallery */}
        {galleryPhotos.length > 0 && (
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryPhotos.map((photo) => (
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
        )}

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
