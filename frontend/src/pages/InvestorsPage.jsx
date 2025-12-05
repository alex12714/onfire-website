import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, ArrowRight, Zap, Users, TrendingUp, Shield, Globe, Target, 
  ChevronDown, ChevronUp, Calendar, FileText, Linkedin 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  investorsHero,
  marketOpportunity,
  whyInvest,
  businessModel,
  roadmapInvestors,
  team,
  faq,
  ctaInvestors
} from '../data/investorsData';

const iconMap = {
  Zap, Users, TrendingUp, Shield, Globe, Target
};

// Navbar
const InvestorsNavbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b14]/95 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <Flame className="w-8 h-8 text-orange-500 transition-transform group-hover:scale-110" />
          <span className="text-white font-bold text-xl">OnFire Messenger</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-300 text-sm font-medium hover:text-orange-500 transition-colors">Home</Link>
          <a href="/#features" className="text-gray-300 text-sm font-medium hover:text-orange-500 transition-colors">Features</a>
          <Link to="/fireproof" className="text-gray-300 text-sm font-medium hover:text-orange-500 transition-colors flex items-center gap-1">
            <Flame className="w-4 h-4" /> FireProof
          </Link>
          <Link to="/investors" className="text-orange-500 text-sm font-medium">Investors</Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-white text-sm font-medium hover:text-orange-500 transition-colors">Login</a>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-[#0a0b14] via-[#0f1029] to-[#0a0b14] overflow-hidden pt-20">
    {/* Background effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
    </div>

    {/* Floating chart decoration */}
    <div className="absolute right-10 top-32 hidden lg:block opacity-20">
      <svg width="300" height="200" viewBox="0 0 300 200">
        <path d="M0 150 Q75 100 150 120 T300 50" stroke="#f97316" strokeWidth="3" fill="none" />
        <circle cx="150" cy="120" r="6" fill="#f97316" />
        <circle cx="300" cy="50" r="6" fill="#f97316" />
      </svg>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500">
          <TrendingUp className="w-4 h-4" />
          {investorsHero.badge}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
        {investorsHero.title.map((line, i) => (
          <span key={i} className="block text-orange-500" style={{ fontStyle: 'italic' }}>
            {line}
          </span>
        ))}
      </h1>

      <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
        {investorsHero.subtitle}
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {investorsHero.stats.map((stat, i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-colors">
            <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Schedule a Call
        </Button>
        <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold text-lg flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Download Pitch Deck
        </Button>
      </div>
    </div>
  </section>
);

// Market Opportunity Section
const MarketSection = () => (
  <section className="py-24 bg-[#0a0b14]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Market <span className="text-orange-500">Opportunity</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {marketOpportunity.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {marketOpportunity.stats.map((stat, i) => (
          <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 hover:border-orange-500/30 transition-all">
            <p className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto">
        {marketOpportunity.description}
      </p>
    </div>
  </section>
);

// Why Invest Section
const WhyInvestSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#0f1029]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Invest in <span className="text-orange-500">OnFire</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyInvest.items.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={i} className="p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:border-orange-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Icon className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Business Model Section
const BusinessModelSection = () => (
  <section className="py-24 bg-[#0f1029]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Business <span className="text-orange-500">Model</span>
        </h2>
        <p className="text-gray-400 text-lg">{businessModel.subtitle}</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8">
        {businessModel.streams.map((stream, i) => (
          <div key={i} className="mb-6 last:mb-0">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-white font-semibold">{stream.name}</span>
                <p className="text-gray-500 text-sm">{stream.description}</p>
              </div>
              <span className="text-orange-500 font-bold text-xl">{stream.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transition-all duration-1000"
                style={{ width: `${stream.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Roadmap Section
const RoadmapSection = () => (
  <section className="py-24 bg-[#0a0b14]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Investment <span className="text-orange-500">Roadmap</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2 hidden md:block" />
        
        {roadmapInvestors.milestones.map((milestone, i) => (
          <div key={i} className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Content */}
            <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/30 transition-all">
                <span className="text-orange-500 font-semibold text-sm">{milestone.quarter}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{milestone.title}</h3>
                <p className="text-gray-400 text-sm">{milestone.description}</p>
              </div>
            </div>
            
            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-[#0a0b14] hidden md:block" />
            
            {/* Spacer */}
            <div className="hidden md:block w-5/12" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Team Section
const TeamSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#0f1029]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-orange-500">Team</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.members.map((member, i) => (
          <div key={i} className="group">
            {/* Image */}
            <div className="relative h-80 mb-4 rounded-2xl overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-transparent to-transparent" />
              
              {/* LinkedIn icon */}
              <a href="#" className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
            
            {/* Info */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 -mt-12 relative z-10 mx-4">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-orange-500 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#0f1029]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, i) => (
            <div 
              key={i} 
              className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold pr-4">{item.question}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="py-24 bg-[#0a0b14] relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
    </div>
    
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/10 rounded-2xl mb-8">
        <TrendingUp className="w-10 h-10 text-orange-500" />
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        {ctaInvestors.title}
      </h2>
      <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        {ctaInvestors.subtitle}
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
          {ctaInvestors.buttons[0].text}
          <ArrowRight className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold text-lg">
          {ctaInvestors.buttons[1].text}
        </Button>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-[#0a0b14] border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-orange-500" />
          <span className="text-white font-bold">OnFire Messenger</span>
        </Link>
        <p className="text-gray-500 text-sm">
          © 2025 OnFire Messenger. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Main Investors Page
const InvestorsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b14]">
      <InvestorsNavbar />
      <HeroSection />
      <MarketSection />
      <WhyInvestSection />
      <BusinessModelSection />
      <RoadmapSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default InvestorsPage;
