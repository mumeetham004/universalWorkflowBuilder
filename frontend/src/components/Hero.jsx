import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const images = [
    "https://iili.io/C9GKWQ9.png",
    "https://iili.io/C9GKVh7.png",
    "https://iili.io/C9GKhBe.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Images Carousel */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Dairia dairy background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay to ensure readability of buttons and text */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 z-10 w-full">
        <div className="max-w-xl animate-fade-in-up">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:bg-blue-700 transition shadow-lg">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg">
              Our Story
            </button>
          </div>

          <div className="mt-10 flex items-center space-x-6">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              ].map((src, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={src} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm text-white font-medium drop-shadow-lg">
              Trusted by <span className="text-white font-bold">10k+</span> happy customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
