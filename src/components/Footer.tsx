
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-50 mb-4 md:mb-0">
            <span className="text-2xl font-light tracking-wider">
              Wedding<span className="font-medium">Lens</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="https://instagram.com/weddinglens_photography" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-stone-300 hover:text-amber-400 transition-colors duration-200"
            >
              <Instagram size={20} />
              <span className="font-light">@weddinglens_photography</span>
            </a>
          </div>
          
          <div className="text-stone-300 text-center md:text-right">
            <p className="font-light">&copy; 2024 WeddingLens Photography. All rights reserved.</p>
            <p className="text-sm mt-1 font-light">Capturing love stories, one moment at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
