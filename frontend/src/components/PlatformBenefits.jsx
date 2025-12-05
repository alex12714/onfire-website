import React from 'react';
import { platformBenefits } from '../data/mock';
import { Users, Crown, Building } from 'lucide-react';

const iconMap = {
  Users: Users,
  Crown: Crown,
  Building: Building
};

const PlatformBenefits = () => {
  return (
    <section className="py-24 bg-[#0a0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          One Platform, <span className="text-orange-500">Endless Possibilities</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {platformBenefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={benefit.id}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Icon container */}
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

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

export default PlatformBenefits;
