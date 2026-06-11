import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Award, Compass, Zap, Workflow } from 'lucide-react';

export default function WhyChooseUs() {
  const comparisonData = [
    {
      feature: 'Codebase context comprehension',
      legacy: 'Limited to current open file or basic workspace tags.',
      cursor: 'Deep indexing. Connects vectors of your entire codebase, including imports.',
      highlight: true
    },
    {
      feature: 'In-line edits (⌘K)',
      legacy: 'Must copy code to chat sidebar, ask, copy result, paste it back.',
      cursor: 'Command + K writes or edits code directly in place inside editor.',
      highlight: true
    },
    {
      feature: 'Multi-file edits',
      legacy: 'Impossible. Must manually open and apply changes to files one-by-one.',
      cursor: 'AI handles imports, dependencies, and edits across multiple files in parallel.',
      highlight: true
    },
    {
      feature: 'Context awareness',
      legacy: 'Must write long system prompts to teach AI package versions.',
      cursor: 'Auto-detects active libraries, configurations, and packages in one click.',
      highlight: false
    },
    {
      feature: 'Privacy features',
      legacy: 'Telemetry sent to central servers without opt-out.',
      cursor: 'Zero-data retention mode available. Code never stored on servers.',
      highlight: false
    }
  ];

  const timelineSteps = [
    {
      period: 'Phase 1: Legacy Manual Flow',
      title: 'Manual Coding & Search Engine Queries',
      desc: 'Developers spent hours reading documentation, copying patterns, debugging stack traces manually, and fixing typo-driven build bugs.',
      icon: <Compass className="h-5 w-5 text-slate-400" />,
      color: 'border-slate-800'
    },
    {
      period: 'Phase 2: Extension Era',
      title: 'Basic Copilot Sidebar Extensions',
      desc: 'Generic chat sidebars and single-line autocompletes appeared. Swapping between chat panels and editor files remained clunky and contextless.',
      icon: <X className="h-5 w-5 text-amber-500" />,
      color: 'border-amber-500/30'
    },
    {
      period: 'Phase 3: The Cursor Era (Now)',
      title: 'AI-First Native Editor Architecture',
      desc: 'Predictive cursor moves, whole-file automated refactoring, and multi-file code execution are baked straight into the core code editor engine.',
      icon: <Check className="h-5 w-5 text-brand-cyan" />,
      color: 'border-brand-purple/50 bg-[#0c0824]'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-bg/95 border-t border-brand-cardBorder/30 relative overflow-hidden">
      <div className="glow-blob bg-brand-purple w-[35rem] h-[35rem] top-1/2 left-[-15rem] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full px-3 py-1 mb-4">
            <Award className="h-4 w-4 text-brand-cyan" />
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">Evolution of IDEs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-white-gray mb-4">
            Why developers switch to Cursor
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            It is not just an autocomplete extension. It is a completely redesigned workspace tailored for fast execution.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mb-24 overflow-x-auto rounded-xl border border-brand-cardBorder bg-[#090716]/60 backdrop-blur-md">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-brand-cardBorder/60 bg-[#0c0824]/80 text-xs uppercase text-slate-400 font-bold select-none">
                <th className="py-5 px-6">Capability</th>
                <th className="py-5 px-6">Traditional IDE + Extensions</th>
                <th className="py-5 px-6 text-brand-cyan">Cursor AI Editor</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-slate-300 divide-y divide-brand-cardBorder/40">
              {comparisonData.map((item, index) => (
                <tr key={index} className={`transition-colors hover:bg-white/5 ${item.highlight ? 'bg-brand-purple/5' : ''}`}>
                  <td className="py-5 px-6 font-bold text-white max-w-[200px]">
                    {item.feature}
                  </td>
                  <td className="py-5 px-6 text-slate-500 flex items-start space-x-2">
                    <X className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span>{item.legacy}</span>
                  </td>
                  <td className="py-5 px-6 text-slate-300 border-l border-brand-cardBorder/30">
                    <div className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                      <span className={item.highlight ? 'text-white font-semibold' : ''}>{item.cursor}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 select-none">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center space-x-2">
              <Workflow className="h-5 w-5 text-brand-purple" />
              <span>Workflow Evolution Timeline</span>
            </h3>
          </div>

          <div className="relative border-l border-brand-cardBorder/80 ml-4 md:ml-32 pl-8 space-y-12 pb-4">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Timeline dot icon */}
                <div className={`absolute -left-[45px] top-1.5 h-8 w-8 rounded-full border border-brand-cardBorder bg-brand-bg flex items-center justify-center shadow-lg transition-transform hover:scale-115 ${step.color}`}>
                  {step.icon}
                </div>

                {/* Period label positioned left on desktop */}
                <div className="hidden md:block absolute -left-[160px] top-2 text-right w-28 text-xs font-semibold uppercase text-brand-cyan tracking-wider">
                  {step.period.split(':')[0]}
                </div>

                {/* Content Box */}
                <div className="glass-card p-6 border border-brand-cardBorder bg-[#090714]/80">
                  <span className="block md:hidden text-xs font-semibold text-brand-cyan uppercase mb-1 tracking-wider">
                    {step.period}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
