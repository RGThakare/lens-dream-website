
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-stone-50/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-light text-stone-800 tracking-wider">
            Wedding<span className="font-medium">Lens</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-light"
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-light"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-light"
            >
              Portfolio
            </button>
            <Link 
              to="/about"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-light"
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="text-stone-700 hover:text-stone-900 transition-colors duration-200 font-light"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-stone-50/95 backdrop-blur-sm rounded-lg mt-2 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link 
                to="/"
                className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-left font-light"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-left font-light"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-left font-light"
              >
                Portfolio
              </button>
              <Link 
                to="/about"
                className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-left font-light"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="text-stone-700 hover:text-stone-900 transition-colors duration-200 text-left font-light"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
