import React from 'react';
import { fireProofCard } from '../data/mock';
import { CreditCard, RefreshCw, Zap, DollarSign, Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  CreditCard: CreditCard,
  RefreshCw: RefreshCw,
  Zap: Zap,
  DollarSign: DollarSign
};

const FireProofCard = () => {
  return (
    <section id="fireproof" className="py-24 bg-[#0a0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spend Your <span className="text-orange-500">FireProof</span> Anywhere
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {fireProofCard.subtitle}
          </p>
        </div>

        {/* Card Image and Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Card Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 overflow-hidden">
              {/* Sparkle effect */}
              <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: Math.random() * 0.5 + 0.2
                    }}
                  />
                ))}
              </div>
              
              <img
                src={fireProofCard.cardImage}
                alt="FireProof Payment Cards"
                className="relative z-10 w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Decorative diamond */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rotate-45 bg-gradient-to-br from-orange-500/30 to-transparent" />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {fireProofCard.features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use It Everywhere Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Use It <span className="text-orange-500">Everywhere</span>
            </h3>
            <p className="text-gray-400 mb-8">
              {fireProofCard.useEverywhere.subtitle}
            </p>

            <ul className="space-y-3 mb-8">
              {fireProofCard.useEverywhere.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#">
              <Button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2">
                Learn About FireProof Token
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Cafe Image */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={fireProofCard.cafeImage}
              alt="Using OnFire Card at cafe"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireProofCard;
