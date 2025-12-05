import React, { useState } from 'react';
import { pricing } from '../data/mock';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  return (
    <section className="py-24 bg-[#0a0b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, <span className="text-orange-500">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {pricing.subtitle}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Model Toggle */}
          <div className="flex bg-gray-900 rounded-xl p-1">
            {pricing.models.map((model, index) => (
              <button
                key={index}
                onClick={() => setSelectedModel(index)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedModel === index
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {model}
              </button>
            ))}
          </div>

          {/* Period Toggle */}
          <div className="flex bg-gray-900 rounded-xl p-1">
            {pricing.periods.map((period, index) => (
              <button
                key={index}
                onClick={() => setSelectedPeriod(index)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedPeriod === index
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-orange-500/10 to-gray-900/50 border-2 border-orange-500/50 scale-105'
                  : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-1">{plan.priceLabel}</span>
              </div>

              <p className="text-gray-400 text-sm mb-8">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
