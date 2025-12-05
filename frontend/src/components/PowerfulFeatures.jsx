import React, { useState, useEffect, useRef, useCallback } from 'react';
import { powerfulFeatures } from '../data/mock';

const PowerfulFeatures = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const containerRef = useRef(null);
  
  const cardWidth = 340; // card width + gap
  const totalOriginalItems = powerfulFeatures.items.length;
  const totalWidth = cardWidth * totalOriginalItems;

  // Calculate which card is in the center based on translateX
  const getCenterCardIndex = useCallback(() => {
    const offset = Math.abs(translateX) % totalWidth;
    const centerIndex = Math.round(offset / cardWidth) % totalOriginalItems;
    return centerIndex;
  }, [translateX, totalWidth, totalOriginalItems, cardWidth]);

  const [activeIndex, setActiveIndex] = useState(0);

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
    }
    
    lastTimeRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  }, [isHovered, totalWidth]);

  // Update active index based on center position
  useEffect(() => {
    setActiveIndex(getCenterCardIndex());
  }, [translateX, getCenterCardIndex]);

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

  // Calculate if a specific card instance is the center one
  const isCenterCard = (itemIndex) => {
    if (!containerRef.current) return itemIndex === totalOriginalItems + activeIndex;
    
    const containerWidth = containerRef.current.offsetWidth || 1920;
    const centerX = containerWidth / 2;
    
    // Calculate the position of this card
    const cardPosition = (itemIndex * cardWidth) + translateX + (containerWidth / 2) - (cardWidth / 2);
    const cardCenter = cardPosition + (cardWidth / 2);
    
    // Check if this card's center is closest to the viewport center
    const distanceFromCenter = Math.abs(cardCenter - centerX);
    return distanceFromCenter < cardWidth / 2;
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
      </div>

      {/* Infinite Carousel - Full width container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
      >
        {/* Shadow overlays - Full screen width, extended height */}
        <div 
          className="absolute left-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a0b14] via-[#0a0b14]/90 to-transparent"
          style={{
            top: '-50px',
            bottom: '-50px',
            width: '25vw',
            minWidth: '200px'
          }}
        />
        <div 
          className="absolute right-0 z-10 pointer-events-none bg-gradient-to-l from-[#0a0b14] via-[#0a0b14]/90 to-transparent"
          style={{
            top: '-50px',
            bottom: '-50px',
            width: '25vw',
            minWidth: '200px'
          }}
        />

        {/* Cards Container */}
        <div className="flex justify-center overflow-visible">
          <div 
            className="flex"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isHovered ? 'transform 0.3s ease-out' : 'none'
            }}
          >
            {items.map((feature, index) => {
              const isCenter = isCenterCard(index);
              
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[320px] mx-2.5 transition-all duration-300 ${
                    isCenter ? 'scale-105 opacity-100' : 'scale-95 opacity-40'
                  }`}
                  onClick={() => goToSlide(index % totalOriginalItems)}
                >
                  <div className={`relative h-[420px] rounded-3xl overflow-hidden bg-gray-900 border transition-all duration-300 cursor-pointer ${
                    isCenter ? 'border-orange-500/50 shadow-xl shadow-orange-500/10' : 'border-gray-800'
                  }`}>
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isCenter ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        isCenter ? 'text-orange-500' : 'text-white'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Glow effect on active */}
                    {isCenter && (
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
    </section>
  );
};

export default PowerfulFeatures;
