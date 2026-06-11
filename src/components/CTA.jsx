import React from 'react';
import { Download, Sparkles, Terminal } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-cardBorder/30">
      {/* Background Radial Rings & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12)_0%,transparent_65%)]"></div>
      <div className="glow-blob bg-brand-purple w-[30rem] h-[30rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card bg-gradient-to-br from-[#0c0827]/85 to-[#050311]/95 border border-brand-purple/20 p-8 md:p-16 text-center rounded-3xl relative overflow-hidden shadow-2xl">
          
          {/* Subtle Grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0824_1px,transparent_1px),linear-gradient(to_bottom,#0c0824_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center space-x-2 bg-brand-purple/20 border border-brand-purple/40 rounded-full px-3.5 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-brand-cyan animate-pulse" />
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">Upgrade Your Code Velocity</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
              Ready to build software <br className="hidden sm:inline" />
              <span className="text-gradient-purple-cyan">at the speed of thought?</span>
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-medium">
              Join over 100,000+ developers shipping code daily. Get started with our local autocomplete models for free.
            </p>

            {/* Primary Download button */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a
                href="#download"
                className="flex items-center justify-center space-x-2.5 px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan hover:from-brand-purpleHover hover:to-brand-cyan text-white font-extrabold text-base rounded-full shadow-lg shadow-brand-purple/20 hover:scale-[1.02] transition-all duration-300 group"
              >
                <Download className="h-5 w-5 text-white group-hover:translate-y-[1px] transition-transform" />
                <span>Download for Windows</span>
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>

            {/* Micro mock CLI block */}
            <div className="inline-flex items-center space-x-2 bg-[#090715] px-4 py-2.5 rounded-lg border border-brand-cardBorder text-slate-400 text-xs font-mono select-none">
              <Terminal className="h-4 w-4 text-brand-cyan" />
              <span className="text-slate-500">$</span>
              <span>winget install --id Cursor.Editor</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
