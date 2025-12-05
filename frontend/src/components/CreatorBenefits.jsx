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
  Settings
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
  { x: 15, y: 15, size: 'text-xl md:text-2xl', rotate: -5 },
  { x: 50, y: 8, size: 'text-2xl md:text-3xl', rotate: 3 },
  { x: 82, y: 18, size: 'text-lg md:text-xl', rotate: -8 },
  { x: 22, y: 38, size: 'text-lg md:text-xl', rotate: 6 },
  { x: 55, y: 35, size: 'text-xl md:text-2xl', rotate: -3 },
  { x: 80, y: 42, size: 'text-xl md:text-2xl', rotate: 5 },
  { x: 12, y: 62, size: 'text-xl md:text-2xl', rotate: -4 },
  { x: 48, y: 65, size: 'text-lg md:text-xl', rotate: 7 },
  { x: 82, y: 70, size: 'text-2xl md:text-3xl', rotate: -6 },
];

const CreatorBenefits = () => {
  const [activeWord, setActiveWord] = useState(null);

  const handleWordClick = (index) => {
    setActiveWord(activeWord === index ? null : index);
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
        <div className="relative h-[550px] md:h-[500px]">
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
                  transform: `translate(-50%, -50%) rotate(${isActive ? 0 : position.rotate}deg)`,
                }}
                onClick={() => handleWordClick(index)}
              >
                {/* Word/Title with inline expansion */}
                <div className="flex flex-col items-center">
                  {/* Title */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`${position.size} font-bold transition-all duration-500 whitespace-nowrap
                        ${isActive 
                          ? 'text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]' 
                          : activeWord !== null 
                            ? 'text-gray-600' 
                            : 'text-white hover:text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)] hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]'
                        }`}
                    >
                      {item.title}
                    </span>
                    {/* Icon appears when active */}
                    <div
                      className={`transition-all duration-500 ${
                        isActive 
                          ? 'opacity-100 scale-100 ml-2' 
                          : 'opacity-0 scale-0 w-0'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-orange-500" />
                      </div>
                    </div>
                  </div>

                  {/* Description - slides down when active */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isActive 
                        ? 'max-h-40 opacity-100 mt-3' 
                        : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center max-w-xs md:max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreatorBenefits;
