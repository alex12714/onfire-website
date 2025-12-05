import React from 'react';
import { heroData } from '../data/mock';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0b14] via-[#0f1029] to-[#0a0b14] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heroData.title.map((word, index) => (
                <span
                  key={index}
                  className={`block ${
                    index === 0
                      ? 'text-orange-500'
                      : index === 1
                      ? 'text-orange-400'
                      : index === 2
                      ? 'text-orange-500'
                      : 'text-orange-400'
                  }`}
                  style={{
                    fontStyle: 'italic',
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <h2 className="text-xl md:text-2xl text-white font-semibold">
              {heroData.subtitle}
            </h2>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              {heroData.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={heroData.cta[0].href} target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                  {heroData.cta[0].text}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href={heroData.cta[1].href}>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 rounded-lg font-semibold text-lg transition-all flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  {heroData.cta[1].text}
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-3xl scale-150" />
              
              {/* Phone image */}
              <img
                src={heroData.mainImage}
                alt="OnFire Messenger App Interface"
                className="relative z-10 w-full max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-500"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))'
                }}
              />
              
              {/* Floating particles */}
              <div className="absolute top-10 right-0 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 right-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0b14] to-transparent" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
