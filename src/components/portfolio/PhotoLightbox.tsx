import React, { useEffect, useCallback } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Photo } from '@/data/portfolioData';

interface PhotoLightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate
}) => {
  const currentPhoto = photos[currentIndex];

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    onNavigate(newIndex);
  }, [currentIndex, photos.length, onNavigate]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, goToPrevious, goToNext, onClose]);

  if (!currentPhoto) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Previous arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 z-10 text-white hover:bg-white/20 rounded-full h-12 w-12"
            disabled={photos.length <= 1}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Next arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 z-10 text-white hover:bg-white/20 rounded-full h-12 w-12"
            disabled={photos.length <= 1}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Main image */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="text-center text-white">
              <h3 className="text-xl font-light mb-2">{currentPhoto.title}</h3>
              <p className="text-white/80 font-light">{currentPhoto.description}</p>
              <p className="text-white/60 text-sm mt-2">
                {currentIndex + 1} of {photos.length}
              </p>
            </div>
          </div>

          {/* Thumbnail navigation */}
          {photos.length > 1 && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => onNavigate(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-white scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoLightbox;