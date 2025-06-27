
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <span className="text-2xl font-bold">
              LENS<span className="text-amber-400">ART</span>
            </span>
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2024 LensArt Photography. All rights reserved.</p>
            <p className="text-sm mt-1">Capturing moments, creating memories.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
