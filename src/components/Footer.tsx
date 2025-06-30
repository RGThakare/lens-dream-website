
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-50 mb-4 md:mb-0">
            <span className="text-2xl font-light tracking-wider">
              Darklight<span className="font-medium">Wedding</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="https://www.instagram.com/darklight_weddings.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-stone-300 hover:text-amber-400 transition-colors duration-200"
            >
              <Instagram size={20} />
              <span className="font-light">@darklight_weddings.in</span>
            </a>
          </div>
          
          <div className="text-stone-300 text-center md:text-right">
            <p className="font-light">&copy; 2024 Darklight Wedding Photography. All rights reserved.</p>
            <p className="text-sm mt-1 font-light">Capturing love stories, one moment at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
