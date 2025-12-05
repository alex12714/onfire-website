import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../data/mock';
import { Flame, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  // Map footer items to their routes
  const getItemLink = (item) => {
    const linkMap = {
      'Features': '/#features',
      'Communities': '/#communities',
      'Marketplace': '/#marketplace',
      'FireProof': '/fireproof',
      'Investors': '/investors'
    };
    return linkMap[item] || '#';
  };

  const isInternalRoute = (item) => {
    return ['FireProof', 'Investors'].includes(item);
  };

  return (
    <footer className="bg-[#0a0b14] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-white font-bold text-xl">{footer.brand}</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              {footer.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Github, href: '#' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-gray-800 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footer.links.map((column, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {isInternalRoute(item) ? (
                      <Link
                        to={getItemLink(item)}
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href={getItemLink(item)}
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
