import React from 'react';
import { howItWorks } from '../data/mock';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#0f1029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0" />

          {howItWorks.steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8">
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-colors" />
                <div className="relative w-16 h-16 bg-gray-900 border-2 border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <span className="text-2xl font-bold text-orange-500 group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
