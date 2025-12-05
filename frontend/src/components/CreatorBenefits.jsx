import React, { useState } from 'react';
import { creatorBenefits } from '../data/mock';
import {
  TrendingUp,
  PiggyBank,
  Shield,
  Rocket,
  Gift,
  Lock,
  Headphones,
  Star,
  Settings,
  X
} from 'lucide-react';

const iconMap = {
  TrendingUp: TrendingUp,
  PiggyBank: PiggyBank,
  Shield: Shield,
  Rocket: Rocket,
  Gift: Gift,
  Lock: Lock,
  Headphones: Headphones,
  Star: Star,
  Settings: Settings
};

// Word cloud positions - scattered layout
const wordPositions = [
  { x: 15, y: 20, size: 'text-2xl', rotate: -5 },
  { x: 55, y: 10, size: 'text-3xl', rotate: 3 },
  { x: 80, y: 25, size: 'text-xl', rotate: -8 },
  { x: 25, y: 45, size: 'text-xl', rotate: 6 },
  { x: 50, y: 40, size: 'text-2xl', rotate: -3 },
  { x: 75, y: 50, size: 'text-2xl', rotate: 5 },
  { x: 10, y: 70, size: 'text-2xl', rotate: -4 },
  { x: 45, y: 72, size: 'text-xl', rotate: 7 },
  { x: 78, y: 75, size: 'text-3xl', rotate: -6 },
];

const CreatorBenefits = () => {
  const [activeWord, setActiveWord] = useState(null);

  const handleWordClick = (index) => {
    setActiveWord(activeWord === index ? null : index);
  };

  const handleClose = () => {
    setActiveWord(null);
  };

  return (
    <section id="communities" className="py-24 bg-[#0f1029] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            For Community <span className="text-orange-500">Leaders & Creators</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
            {creatorBenefits.subtitle}
          </p>
          <p className="text-orange-500/70 text-sm">Click on any word to learn more</p>
        </div>

        {/* Word Cloud Container */}
        <div className="relative h-[500px] md:h-[450px]">
          {creatorBenefits.items.map((item, index) => {
            const position = wordPositions[index];
            const Icon = iconMap[item.icon];
            const isActive = activeWord === index;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                  isActive ? 'z-50' : 'z-10'
                }`}
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: isActive 
                    ? 'translate(-50%, -50%) scale(1)' 
                    : `translate(-50%, -50%) rotate(${position.rotate}deg)`,
                }}
                onClick={() => handleWordClick(index)}
              >
                {/* Word/Title - Always visible */}
                <div
                  className={`transition-all duration-500 ${
                    isActive 
                      ? 'opacity-0 scale-0' 
                      : activeWord !== null 
                        ? 'opacity-30 scale-90' 
                        : 'opacity-100 scale-100'
                  }`}
                >
                  <span
                    className={`${position.size} font-bold text-white hover:text-orange-500 transition-colors whitespace-nowrap
                      drop-shadow-[0_0_10px_rgba(249,115,22,0.3)] hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]`}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Expanded Card - Shows on click */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    transition-all duration-500 ease-out ${
                    isActive
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-0 pointer-events-none'
                  }`}
                >
                  <div className="relative w-[320px] md:w-[380px] bg-gradient-to-br from-gray-900 to-gray-800 
                    rounded-2xl p-6 border border-orange-500/30 shadow-2xl shadow-orange-500/10">
                    {/* Close button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 
                        flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-orange-500" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-orange-500/10 rounded-full blur-xl" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Background overlay when a word is active */}
          <div
            className={`absolute inset-0 bg-[#0f1029]/80 transition-opacity duration-300 ${
              activeWord !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={handleClose}
          />
        </div>
      </div>
    </section>
  );
};

export default CreatorBenefits;
