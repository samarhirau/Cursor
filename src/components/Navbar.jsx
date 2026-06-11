import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg/75 backdrop-blur-md border-b border-brand-cardBorder/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-white group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px] flex items-center justify-center">
              <div className="h-full w-full rounded-lg bg-brand-bg flex items-center justify-center transition-colors group-hover:bg-brand-bg/50">
                <Terminal className="h-5 w-5 text-brand-cyan group-hover:text-brand-purple transition-colors duration-300" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              cursor<span className="text-brand-cyan">.ai</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200 font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-brand-cyan after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="relative group overflow-hidden rounded-full p-[1px] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-purple via-blue-500 to-brand-cyan rounded-full"></span>
              <span className="relative block px-5 py-2 rounded-full bg-brand-bg text-sm font-semibold text-white transition-all group-hover:bg-transparent duration-300">
                Get Started <ArrowRight className="inline-block ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-bg/95 backdrop-blur-lg border-b border-brand-cardBorder px-4 pt-2 pb-6 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base text-slate-300 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-brand-cardBorder/60 pt-4 flex flex-col space-y-3 px-3">
              <a
                href="#login"
                onClick={() => setIsOpen(false)}
                className="text-center text-sm text-slate-300 hover:text-white py-2"
              >
                Sign In
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="text-center text-sm font-semibold bg-gradient-to-r from-brand-purple to-brand-cyan hover:from-brand-purpleHover hover:to-brand-cyan text-white py-3 rounded-full shadow-lg shadow-brand-purple/20 transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
