import React from 'react';
import { ctaSection } from '../data/mock';
import { Button } from './ui/button';
import { ArrowRight, Flame } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f1029] to-[#0a0b14] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/10 rounded-2xl mb-8">
            <Flame className="w-10 h-10 text-orange-500" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {ctaSection.title}
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {ctaSection.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={ctaSection.cta[0].href} target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                {ctaSection.cta[0].text}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href={ctaSection.cta[1].href}>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 rounded-xl font-semibold text-lg transition-all"
              >
                {ctaSection.cta[1].text}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
