
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Camera, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
                About <span className="font-medium">Us</span>
              </h1>
              
              <p className="text-stone-600 text-lg mb-6 leading-relaxed font-light">
                We are passionate wedding photographers dedicated to capturing the authentic emotions 
                and timeless moments of your special day. With over 8 years of experience, we believe 
                every couple has a unique love story worth telling.
              </p>
              
              <p className="text-stone-600 text-lg mb-8 leading-relaxed font-light">
                Our approach is intimate and unobtrusive, allowing natural moments to unfold while 
                creating beautiful, artistic images that you'll treasure forever. We specialize in 
                capturing the raw emotions, delicate details, and joyful celebrations that make your 
                wedding day extraordinary.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-stone-800 text-2xl font-medium mb-2">200+</h3>
                  <p className="text-stone-600 font-light">Weddings Captured</p>
                </div>
                <div>
                  <h3 className="text-stone-800 text-2xl font-medium mb-2">8+</h3>
                  <p className="text-stone-600 font-light">Years Experience</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Camera className="text-stone-600" size={20} />
                  <span className="text-stone-700 font-light">Canon & Sony</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="text-stone-600" size={20} />
                  <span className="text-stone-700 font-light">Love Stories</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Wedding photographer at work"
                  className="w-full shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-800/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
