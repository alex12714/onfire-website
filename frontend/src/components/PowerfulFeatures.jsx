import React, { useState } from 'react';
import { powerfulFeatures } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const PowerfulFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-24 bg-[#0a0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful <span className="text-orange-500">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {powerfulFeatures.subtitle}
          </p>
        </div>

        {/* Features Display */}
        <div className="grid lg:grid-cols-2 gap-8">
          {powerfulFeatures.items.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                activeFeature === index ? 'lg:col-span-2' : ''
              }`}
              onClick={() => setActiveFeature(index)}
            >
              {/* Background Image */}
              <div className="relative h-80 lg:h-96">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-[#0a0b14]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 max-w-xl">
                  {feature.description}
                </p>
                <button className="flex items-center gap-2 text-orange-500 font-medium hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/30 rounded-3xl transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
