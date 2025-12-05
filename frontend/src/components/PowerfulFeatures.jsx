import React, { useState, useEffect, useRef, useCallback } from 'react';
import { powerfulFeatures } from '../data/mock';

const PowerfulFeatures = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  
  const cardWidth = 340; // card width + gap
  const totalOriginalItems = powerfulFeatures.items.length;
  const totalWidth = cardWidth * totalOriginalItems;

  // Continuous animation loop
  const animate = useCallback((timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    
    if (!isHovered) {
      // Move 50px per second
      const speed = 50;
      const movement = (speed * delta) / 1000;
      
      setTranslateX(prev => {
        const newTranslate = prev - movement;
        // Reset when we've moved one full set
        if (Math.abs(newTranslate) >= totalWidth) {
          return newTranslate + totalWidth;
        }
        return newTranslate;
      });
      
      // Update active index based on position
      setActiveIndex(prev => {
        const currentPos = Math.abs(translateX) % totalWidth;
        const newIndex = Math.floor((currentPos + cardWidth / 2) / cardWidth) % totalOriginalItems;
        return newIndex;
      });
    }
    
    lastTimeRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered, totalWidth, translateX, totalOriginalItems, cardWidth]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const goToSlide = (index) => {
    const targetTranslate = -(index * cardWidth);
    setTranslateX(targetTranslate);
    setActiveIndex(index);
  };

  // Triple the items for seamless infinite scroll
  const items = [...powerfulFeatures.items, ...powerfulFeatures.items, ...powerfulFeatures.items];

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
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0b14] via-[#0a0b14]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0b14] via-[#0a0b14]/80 to-transparent z-10 pointer-events-none" />

          {/* Cards Container */}
          <div className="flex justify-center">
            <div 
              className="flex"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isHovered ? 'transform 0.3s ease-out' : 'none'
              }}
            >
              {items.map((feature, index) => {
                const originalIndex = index % totalOriginalItems;
                const isActive = originalIndex === activeIndex;
                
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[320px] mx-2.5 transition-all duration-300 ${
                      isActive ? 'scale-105 opacity-100' : 'scale-95 opacity-50'
                    }`}
                    onClick={() => goToSlide(originalIndex)}
                  >
                    <div className={`relative h-[420px] rounded-3xl overflow-hidden bg-gray-900 border transition-all duration-300 cursor-pointer ${
                      isActive ? 'border-orange-500/50 shadow-xl shadow-orange-500/10' : 'border-gray-800'
                    }`}>
                      {/* Image */}
                      <div className="relative h-[200px] overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            isActive ? 'scale-110' : 'scale-100'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
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
        </div>

        {/* iOS-style Page Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {powerfulFeatures.items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === index
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
