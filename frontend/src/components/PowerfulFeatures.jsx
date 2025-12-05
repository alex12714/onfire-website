import React, { useState, useRef } from 'react';
import { powerfulFeatures } from '../data/mock';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PowerfulFeatures = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section id="features" className="py-24 bg-[#0a0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              {powerfulFeatures.subtitle}
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                  : 'border-gray-700 text-gray-700 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                  : 'border-gray-700 text-gray-700 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {powerfulFeatures.items.map((feature, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-[300px] md:w-[320px] snap-start"
            >
              <div className="relative h-[480px] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[260px]">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                  <button className="flex items-center gap-2 text-orange-500 font-medium mt-4 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {powerfulFeatures.items.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-600"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PowerfulFeatures;
