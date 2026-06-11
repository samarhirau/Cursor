import React, { useState } from 'react';
import { Terminal, MessageSquare, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Download', href: '#download' },
        { name: 'Changelog', href: '#changelog' },
        { name: 'Roadmap', href: '#roadmap' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Community Forum', href: '#forum' },
        { name: 'GitHub Repo', href: 'https://github.com' },
        { name: 'System Status', href: '#status' },
        { name: 'Security Safety', href: '#safety' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press Kit', href: '#press' },
        { name: 'Contact Sales', href: '#sales' }
      ]
    }
  ];

  return (
    <footer className="bg-brand-bg border-t border-brand-cardBorder/30 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Bio Column */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-2 text-white">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px] flex items-center justify-center">
                <div className="h-full w-full rounded-lg bg-brand-bg flex items-center justify-center">
                  <Terminal className="h-4.5 w-4.5 text-brand-cyan" />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                cursor<span className="text-brand-cyan">.ai</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              The AI-first editor designed to accelerate your development speed. Refactor, generate, and edit code across entire files natively.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="GitHub">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="https://discord.com" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Discord">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((col, idx) => (
            <div key={idx} className="lg:col-span-2 flex flex-col space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider select-none">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup Column */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider select-none">
              Stay Updated
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              Get the latest changelogs, model updates, and optimization tips.
            </p>
            
            {/* Newsletter input form */}
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#080614] border border-brand-cardBorder focus:border-brand-purple rounded-full px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-brand-purple hover:bg-brand-purpleHover text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? <Check className="h-4 w-4 text-brand-cyan" /> : <Send className="h-3.5 w-3.5" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-brand-cyan font-bold transition-all duration-300">
                ✓ Successfully subscribed!
              </span>
            )}
          </div>

        </div>

        {/* Lower Divider & Copyright */}
        <div className="border-t border-brand-cardBorder/40 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-medium select-none">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Cursor AI. Built as a high-fidelity frontend clone. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
