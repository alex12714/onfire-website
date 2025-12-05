import React, { useState, useEffect } from 'react';
import { appFeatures } from '../data/mock';
import { MessageCircle, GraduationCap, ShoppingBag, Bot, Sparkles } from 'lucide-react';

const iconMap = {
  MessageCircle: MessageCircle,
  GraduationCap: GraduationCap,
  ShoppingBag: ShoppingBag,
  Bot: Bot
};

const AppFeatures = () => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Animate chat messages appearing
    const showMessages = async () => {
      for (let i = 0; i < appFeatures.aiChat.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setChatMessages((prev) => [...prev, appFeatures.aiChat[i]]);
      }
    };
    showMessages();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0b14] to-[#0f1029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            One App to <span className="text-orange-500">Run It All</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {appFeatures.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {appFeatures.features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group hover:transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* AI Chat Demo */}
          <div className="bg-gray-900/80 rounded-3xl p-6 border border-gray-800">
            {/* Chat Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h5 className="text-white font-semibold">OnFire Assistant</h5>
                <span className="text-xs text-orange-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  AI Powered
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 min-h-[320px]">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  style={{
                    animation: 'fadeInUp 0.4s ease-out'
                  }}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-orange-500 text-white rounded-br-md'
                        : 'bg-gray-800 text-gray-200 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.message}</p>
                  </div>
                </div>
              ))}
              
              {chatMessages.length < appFeatures.aiChat.length && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default AppFeatures;
