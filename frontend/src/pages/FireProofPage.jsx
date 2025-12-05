import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Shield, Zap, TrendingUp, Lock, CreditCard, Globe, Users, Check, Copy, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  fireproofHero,
  problemsSolving,
  solution,
  tokenDetails,
  supplyAllocation,
  roadmap,
  cta
} from '../data/fireproofData';

const iconMap = {
  Shield, Zap, TrendingUp, Lock, CreditCard, Globe, Users
};

// Navbar for FireProof page
const FireProofNavbar = () => (
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
          <a href="/#communities" className="text-gray-300 text-sm font-medium hover:text-orange-500 transition-colors">Communities</a>
          <Link to="/fireproof" className="text-orange-500 text-sm font-medium flex items-center gap-1">
            <Flame className="w-4 h-4" /> FireProof
          </Link>
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
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
    </div>

    {/* Hero Images */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Left - Coin with fire */}
      <div className="absolute left-0 top-20 w-[400px] h-[400px] opacity-90">
        <img 
          src="https://www.onfire.so/images/proof-coin-fire.png" 
          alt="PROOF Coin"
          className="w-full h-full object-contain"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      
      {/* Center - Card */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[350px] opacity-90">
        <img 
          src="https://www.onfire.so/images/proof-card.png" 
          alt="PROOF Card"
          className="w-full h-auto"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
      
      {/* Right - Phone mockup */}
      <div className="absolute right-0 top-16 w-[300px] opacity-80 hidden lg:block">
        <img 
          src="https://www.onfire.so/images/onfire-app-mockup.png" 
          alt="OnFire App"
          className="w-full h-auto"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-56 pb-24">
      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
          <Flame className="w-4 h-4 text-orange-500" />
          {fireproofHero.badge}
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {fireproofHero.presaleBadge}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
        {fireproofHero.title.map((line, i) => (
          <span key={i} className="block text-orange-500" style={{ fontStyle: 'italic' }}>
            {line}
          </span>
        ))}
      </h1>

      <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
        {fireproofHero.subtitle}
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {fireproofHero.stats.map((stat, i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 text-center hover:border-orange-500/30 transition-colors">
            <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
            <p className="text-white font-bold text-lg">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a href="https://refer.onfire.so/" target="_blank" rel="noopener noreferrer">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
            Join Presale
            <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
        <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold text-lg">
          Read Whitepaper
        </Button>
      </div>
    </div>
  </section>
);

// Problems Section
const ProblemsSection = () => (
  <section className="py-24 bg-[#0a0b14]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The Problem We're <span className="text-orange-500">Solving</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {problemsSolving.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {problemsSolving.problems.map((problem, i) => {
          const Icon = iconMap[problem.icon];
          return (
            <div key={i} className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/30 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Solution Section
const SolutionSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#0f1029]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our <span className="text-orange-500">Solution</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {solution.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Features List */}
        <div className="space-y-4">
          {solution.features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phone Mockup with Cards */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/10 blur-3xl scale-110" />
            
            {/* Phone mockup */}
            <div className="relative bg-gray-900 rounded-[3rem] p-3 border border-gray-700 shadow-2xl">
              {/* Phone notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
              
              {/* Phone screen */}
              <div className="relative bg-white rounded-[2.5rem] overflow-hidden w-[280px] h-[560px]">
                {/* Status bar */}
                <div className="bg-gray-100 px-6 py-3 flex items-center justify-between">
                  <span className="text-black text-xs font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-black rounded-sm" />
                  </div>
                </div>
                
                {/* Header */}
                <div className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-100">
                  <span className="text-gray-400 text-lg">&lt;</span>
                  <h3 className="text-black text-xl font-semibold">Cards</h3>
                </div>
                
                {/* Cards carousel */}
                <div className="px-4 py-8">
                  <div className="relative">
                    {/* Main card */}
                    <div className="bg-gradient-to-br from-blue-500 via-orange-400 to-yellow-400 rounded-2xl p-5 shadow-xl transform -rotate-2">
                      <div className="flex justify-between items-start mb-16">
                        <div className="w-10 h-8 bg-yellow-300 rounded" />
                        <span className="text-white/80 text-xs">MASTERCARD</span>
                      </div>
                      <p className="text-white font-mono text-lg tracking-wider mb-4">5417 9860 8300 7262</p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-white/60 text-xs">Exp. Date</p>
                          <p className="text-white text-sm">06/22</p>
                        </div>
                        <p className="text-white font-medium">MR J FIREPROOF</p>
                      </div>
                      {/* Mastercard logo */}
                      <div className="absolute bottom-4 right-4 flex">
                        <div className="w-6 h-6 bg-red-500 rounded-full" />
                        <div className="w-6 h-6 bg-yellow-500 rounded-full -ml-2" />
                      </div>
                    </div>
                    
                    {/* Secondary card peek */}
                    <div className="absolute top-4 -right-4 w-16 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-60 transform rotate-6" />
                  </div>
                  
                  {/* Dots indicator */}
                  <div className="flex justify-center gap-2 mt-6">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  </div>
                </div>
                
                {/* Add to wallet button */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl text-sm font-medium">
                    <span>🍎</span> Add to Apple Wallet
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Token Details Section
const TokenDetailsSection = () => {
  const [copied, setCopied] = React.useState(false);
  
  const copyContract = () => {
    navigator.clipboard.writeText(tokenDetails.details[4].value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#0f1029]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{tokenDetails.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {tokenDetails.details.slice(0, 4).map((detail, i) => (
              <div key={i}>
                <p className="text-gray-500 text-sm mb-1">{detail.label}</p>
                <p className="text-white font-semibold">{detail.value}</p>
              </div>
            ))}
          </div>
          
          {/* Contract Address */}
          <div>
            <p className="text-gray-500 text-sm mb-2">Contract</p>
            <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-3">
              <code className="text-orange-400 text-sm flex-grow overflow-hidden text-ellipsis">
                {tokenDetails.details[4].value}
              </code>
              <button 
                onClick={copyContract}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
              </button>
              <a href="#" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Supply Allocation Section
const SupplyAllocationSection = () => (
  <section className="py-24 bg-[#0a0b14]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{supplyAllocation.title}</h2>
          <span className="text-gray-400 text-sm">Total: {supplyAllocation.totalSupply}</span>
        </div>
        
        <div className="space-y-4">
          {supplyAllocation.allocations.map((alloc, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-gray-800 last:border-0">
              <div>
                <p className="text-white font-semibold">{alloc.name}</p>
                <p className="text-gray-500 text-sm">{alloc.description}</p>
              </div>
              <div className="text-right">
                <p className="text-orange-500 font-bold text-lg">{alloc.percentage}%</p>
                <p className="text-gray-500 text-sm">{alloc.tokens} tokens</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Roadmap Section
const RoadmapSection = () => (
  <section className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#0f1029]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-orange-500">Roadmap</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmap.phases.map((phase, i) => (
          <div key={i} className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/30 transition-all group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 font-bold">{phase.phase}</span>
              <span className="text-gray-500 text-sm">• {phase.quarter}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
            <ul className="space-y-2">
              {phase.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            {/* Progress line */}
            {i < roadmap.phases.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection = () => (
  <section className="py-24 bg-[#0f1029] relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl" />
    </div>
    
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/10 rounded-2xl mb-8">
        <Flame className="w-10 h-10 text-orange-500" />
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        {cta.title}
      </h2>
      <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        {cta.subtitle}
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a href={cta.buttons[0].href} target="_blank" rel="noopener noreferrer">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
            {cta.buttons[0].text}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
        <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 rounded-full font-semibold text-lg">
          {cta.buttons[1].text}
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

// Main FireProof Page
const FireProofPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b14]">
      <FireProofNavbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <TokenDetailsSection />
      <SupplyAllocationSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default FireProofPage;
