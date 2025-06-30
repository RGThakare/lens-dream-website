import React, { useState, useMemo } from 'react';
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
      category: 'engagement',
      src: '/lovable-uploads/77c8da1c-5163-44fe-b650-2a2106d585ad.png',
      title: 'Perfect Harmony',
      description: 'Beautiful moments before the big day'
    },
    {
      id: 2,
      category: 'engagement',
      src: '/lovable-uploads/a7593116-39db-4041-b72c-5a047d95aa95.png',
      title: 'Love in Nature',
      description: 'Capturing pure joy and connection'
    },
    {
      id: 3,
      category: 'reception',
      src: '/lovable-uploads/56b00d9d-083a-40f3-b3e0-d96b857e8d34.png',
      title: 'Celebration of Joy',
      description: 'Friends and family sharing the happiness'
    },
    {
      id: 4,
      category: 'ceremony',
      src: '/lovable-uploads/0a25f5fd-e755-43c8-bb5b-0825470bd5bd.png',
      title: 'Sacred Rituals',
      description: 'Traditional ceremonies filled with meaning'
    },
    {
      id: 5,
      category: 'ceremony',
      src: '/lovable-uploads/3d3cd3c3-8395-434d-a189-cdf1f32941c1.png',
      title: 'Walking Together',
      description: 'The journey begins as one'
    },
    {
      id: 6,
      category: 'ceremony',
      src: '/lovable-uploads/aeec02f2-2164-4c9c-8a87-ef3da357cd88.png',
      title: 'Groom Portrait',
      description: 'Handsome in traditional attire'
    },
    {
      id: 7,
      category: 'ceremony',
      src: '/lovable-uploads/0aa3dca9-6e69-431c-a5b4-d8362d785ac9.png',
      title: 'Blessed Union',
      description: 'Two hearts becoming one'
    },
    {
      id: 8,
      category: 'ceremony',
      src: '/lovable-uploads/9bef5ebc-a5aa-48e1-98a2-62b3ad5e02d7.png',
      title: 'Sacred Vows',
      description: 'Promises made under nature\'s blessing'
    },
    {
      id: 9,
      category: 'ceremony',
      src: '/lovable-uploads/1c2c74b4-7fed-4064-834d-d3844d9448c6.png',
      title: 'Radiant Bride',
      description: 'Glowing with happiness and tradition'
    },
    {
      id: 10,
      category: 'ceremony',
      src: '/lovable-uploads/ed1c71dd-5d56-45f1-b08b-29531786852d.png',
      title: 'Joyful Moments',
      description: 'Sharing laughter during the ceremony'
    },
    {
      id: 11,
      category: 'ceremony',
      src: '/lovable-uploads/bfd6e606-1fca-4913-a83d-9a4a99b41d98.png',
      title: 'Sacred Bonds',
      description: 'Intimate moments during the rituals'
    },
    {
      id: 12,
      category: 'ceremony',
      src: '/lovable-uploads/ba55e72f-4541-4185-9c0d-35ba855212e7.png',
      title: 'Family Celebration',
      description: 'Loved ones joining in the festivities'
    },
    {
      id: 13,
      category: 'ceremony',
      src: '/lovable-uploads/67477bba-62be-4ffd-9980-b21986ab46b7.png',
      title: 'Sacred Fire',
      description: 'Traditional ceremony around the sacred fire'
    },
    {
      id: 14,
      category: 'engagement',
      src: '/lovable-uploads/e2188e1c-07cd-48e4-909b-8944a40b628d.png',
      title: 'Elegant Portrait',
      description: 'Sophisticated pre-wedding styling'
    },
    {
      id: 15,
      category: 'reception',
      src: '/lovable-uploads/16229d41-ccb7-4571-b842-2cb8723d98ec.png',
      title: 'Elder Blessings',
      description: 'Grandmothers sharing their wisdom'
    },
    {
      id: 16,
      category: 'details',
      src: '/lovable-uploads/bffee3a0-1752-47e7-ac96-49ae289e5cb3.png',
      title: 'Captured Moments',
      description: 'Modern touches in traditional ceremonies'
    }
  ];

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
