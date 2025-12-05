import React, { useState, useEffect, useRef } from 'react';
import { powerfulFeatures } from '../data/mock';

const PowerfulFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  
  // Clone items for infinite scroll effect
  const items = [...powerfulFeatures.items, ...powerfulFeatures.items, ...powerfulFeatures.items];
  const totalOriginalItems = powerfulFeatures.items.length;

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalOriginalItems);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, totalOriginalItems]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="features" className="py-24 bg-[#0a0b14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful <span className="text-orange-500">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {powerfulFeatures.subtitle}
          </p>
        </div>

        {/* Infinite Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Shadow overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0a0b14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0a0b14] to-transparent z-10 pointer-events-none" />

          {/* Cards Container */}
          <div 
            ref={containerRef}
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 340}px + 50% - 160px))`
            }}
          >
            {items.map((feature, index) => {
              const originalIndex = index % totalOriginalItems;
              const isActive = originalIndex === currentIndex;
              
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[320px] mx-2.5 transition-all duration-500 ${
                    isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-60'
                  }`}
                  onClick={() => goToSlide(originalIndex)}
                >
                  <div className={`relative h-[420px] rounded-3xl overflow-hidden bg-gray-900 border transition-all duration-500 cursor-pointer ${
                    isActive ? 'border-orange-500/50 shadow-xl shadow-orange-500/10' : 'border-gray-800'
                  }`}>
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                        isActive ? 'text-orange-500' : 'text-white'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Glow effect on active */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* iOS-style Page Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {powerfulFeatures.items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 h-2 bg-orange-500'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
