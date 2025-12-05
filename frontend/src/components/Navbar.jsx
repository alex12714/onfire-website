import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mock';
import { Flame, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0b14]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Flame className="w-8 h-8 text-orange-500 transition-transform group-hover:scale-110" />
            <span className="text-white font-bold text-xl">OnFire Messenger</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  link.isHighlighted
                    ? 'text-orange-500 flex items-center gap-1'
                    : 'text-gray-300'
                }`}
              >
                {link.isHighlighted && <Flame className="w-4 h-4" />}
                {link.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-white text-sm font-medium hover:text-orange-500 transition-colors"
            >
              Login
            </a>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all hover:scale-105"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    link.isHighlighted
                      ? 'text-orange-500 flex items-center gap-1'
                      : 'text-gray-300'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.isHighlighted && <Flame className="w-4 h-4" />}
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                <a href="#" className="text-white text-sm font-medium">
                  Login
                </a>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
