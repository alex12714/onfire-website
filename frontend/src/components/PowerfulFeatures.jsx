import React, { useState, useEffect, useRef, useCallback } from 'react';
import { powerfulFeatures } from '../data/mock';

const PowerfulFeatures = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  
  const cardWidth = 340;
  const totalOriginalItems = powerfulFeatures.items.length;
  const totalWidth = cardWidth * totalOriginalItems;

  // Triple the items for seamless infinite scroll
  const items = [...powerfulFeatures.items, ...powerfulFeatures.items, ...powerfulFeatures.items];
  const startOffset = totalOriginalItems; // Start from middle set

  // Continuous animation loop
  const animate = useCallback((timestamp) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    
    if (!isHovered) {
      const speed = 60;
      const movement = (speed * delta) / 1000;
      
      setTranslateX(prev => {
        let newTranslate = prev - movement;
        // Seamless loop reset
        if (Math.abs(newTranslate) >= totalWidth * 2) {
          newTranslate = newTranslate + totalWidth;
        }
        return newTranslate;
      });
    }
    
    lastTimeRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered, totalWidth]);

  useEffect(() => {
    // Start from middle set
    setTranslateX(-totalWidth);
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, totalWidth]);

  const goToSlide = (index) => {
    setTranslateX(-totalWidth - (index * cardWidth));
  };

  // Calculate which card index is closest to center
  const getCenterIndex = () => {
    const offset = Math.abs(translateX + totalWidth);
    return Math.round(offset / cardWidth) % totalOriginalItems;
  };

  const activeIndicator = getCenterIndex();

  return (
    <section id="features" className="py-24 bg-[#0a0b14]">
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
      </div>

      {/* Infinite Carousel */}
      <div 
        className="relative overflow-hidden"
        style={{ paddingTop: '50px', paddingBottom: '50px', marginTop: '-50px', marginBottom: '-50px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Shadow overlays - Full width */}
        <div 
          className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            width: '35%',
            background: 'linear-gradient(to right, #0a0b14 0%, #0a0b14 40%, rgba(10,11,20,0.8) 70%, transparent 100%)'
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            width: '35%',
            background: 'linear-gradient(to left, #0a0b14 0%, #0a0b14 40%, rgba(10,11,20,0.8) 70%, transparent 100%)'
          }}
        />

        {/* Cards Container */}
        <div className="flex justify-center">
          <div 
            className="flex items-center"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isHovered ? 'transform 0.3s ease-out' : 'none'
            }}
          >
            {items.map((feature, index) => {
              // Calculate distance from center
              const cardPosition = (index * cardWidth) + translateX;
              const viewportCenter = 0; // Cards are centered via flex
              const distanceFromCenter = Math.abs(cardPosition + cardWidth/2);
              const isCenter = distanceFromCenter < cardWidth * 0.6;
              
              return (
                <div
                  key={index}
                  className="flex-shrink-0 mx-2.5 transition-all duration-500"
                  style={{
                    width: '320px',
                    transform: isCenter ? 'scale(1.08)' : 'scale(0.92)',
                    opacity: isCenter ? 1 : 0.35,
                    zIndex: isCenter ? 30 : 10
                  }}
                  onClick={() => goToSlide(index % totalOriginalItems)}
                >
                  <div 
                    className="relative h-[420px] rounded-3xl overflow-hidden bg-gray-900 cursor-pointer transition-all duration-500"
                    style={{
                      border: isCenter ? '2px solid rgba(249, 115, 22, 0.5)' : '1px solid rgba(55, 65, 81, 0.5)',
                      boxShadow: isCenter ? '0 25px 50px -12px rgba(249, 115, 22, 0.25)' : 'none'
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{ transform: isCenter ? 'scale(1.1)' : 'scale(1)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 
                        className="text-xl font-bold mb-3 transition-colors duration-500"
                        style={{ color: isCenter ? '#f97316' : '#ffffff' }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Glow overlay */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* iOS-style Page Indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {powerfulFeatures.items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              activeIndicator === index
                ? 'w-8 h-2 bg-orange-500'
                : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PowerfulFeatures;
