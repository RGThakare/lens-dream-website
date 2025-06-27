
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white tracking-wide">
            LENS<span className="text-amber-400">ART</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm rounded-lg mt-2 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-amber-400 transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-amber-400 transition-colors duration-200 text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-amber-400 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-amber-400 transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
