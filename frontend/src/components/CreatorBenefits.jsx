import React from 'react';
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

const CreatorBenefits = () => {
  return (
    <section id="communities" className="py-24 bg-[#0f1029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            For Community <span className="text-orange-500">Leaders & Creators</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {creatorBenefits.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatorBenefits.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 hover:bg-gray-900/50"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CreatorBenefits;
