import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, MessageSquareCode, Bug, RefreshCw, Globe } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: <Sparkles className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />,
      title: 'AI Code Generation',
      desc: 'Prompt in plain English to write entire functions or code blocks directly in your open file. Complete your features in seconds.',
      color: 'from-purple-500/10 to-purple-500/0 hover:border-purple-500/30'
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-400 group-hover:text-amber-300 transition-colors" />,
      title: 'Smart Autocomplete',
      desc: 'Predicts your next edits dynamically. Suggests variable declarations, loops, and custom function signatures as you type.',
      color: 'from-amber-500/10 to-amber-500/0 hover:border-amber-500/30'
    },
    {
      icon: <MessageSquareCode className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      title: 'AI Chat Assistant',
      desc: 'Ask questions about your codebase, locate specific files, or consult about logic. No copy-pasting required; it reads your context.',
      color: 'from-cyan-500/10 to-cyan-500/0 hover:border-cyan-500/30'
    },
    {
      icon: <Bug className="h-6 w-6 text-rose-400 group-hover:text-rose-300 transition-colors" />,
      title: 'Bug Detection',
      desc: 'Automatically scans files for potential runtime exceptions, edge cases, and type safety leaks. Fix them with a single click.',
      color: 'from-rose-500/10 to-rose-500/0 hover:border-rose-500/30'
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      title: 'Code Refactoring',
      desc: 'Clean up technical debt, convert codebases to modern design patterns, or migrate to TypeScript with comprehensive AI audits.',
      color: 'from-emerald-500/10 to-emerald-500/0 hover:border-emerald-500/30'
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />,
      title: 'Multi-language Support',
      desc: 'Out-of-the-box support for JS/TS, Python, Rust, Go, C++, Ruby, HTML/CSS, and over 40 other programming environments.',
      color: 'from-blue-500/10 to-blue-500/0 hover:border-blue-500/30'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="features" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background Glow Elements */}
      <div className="glow-blob bg-brand-purple w-[30rem] h-[30rem] top-1/4 -right-20 opacity-10"></div>
      <div className="glow-blob bg-brand-blue w-[25rem] h-[25rem] bottom-1/4 -left-20 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-gradient-white-gray">
            Supercharge your developer flow
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Equipped with state-of-the-art models contextually tuned for your files, imports, and documentation.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featureList.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`glass-card p-8 group relative overflow-hidden bg-gradient-to-br ${feat.color}`}
            >
              {/* Highlight Gradient Hover Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon Container with subtle rotation animation */}
              <div className="mb-6 h-12 w-12 rounded-xl bg-[#0b0819]/80 border border-brand-cardBorder flex items-center justify-center group-hover:border-brand-purple/30 group-hover:scale-110 transition-all duration-300">
                {feat.icon}
              </div>

              {/* Feature Title */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                {feat.title}
              </h3>

              {/* Feature Description */}
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {feat.desc}
              </p>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-brand-purple/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
