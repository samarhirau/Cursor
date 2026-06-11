import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Code, Terminal, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background Radial Gradients & Glow Blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0824_1px,transparent_1px),linear-gradient(to_bottom,#0c0824_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
      
      <div className="glow-blob bg-brand-purple w-[30rem] h-[30rem] -top-20 -left-20 animate-float"></div>
      <div className="glow-blob bg-brand-cyan w-[25rem] h-[25rem] bottom-10 right-0 animate-float-delayed"></div>
      <div className="glow-blob bg-brand-blue w-[35rem] h-[35rem] top-1/3 left-1/3 opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Pill Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full px-3 py-1.5 w-fit mb-6 shadow-sm">
              <Sparkles className="h-4 w-4 text-brand-cyan animate-pulse" />
              <span className="text-xs font-semibold text-brand-cyan tracking-wide uppercase">
                The AI-first Code Editor
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6"
            >
              <span className="block text-gradient-white-gray">Write code at the</span>
              <span className="block text-gradient-purple-cyan mt-1">speed of thought.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-medium"
            >
              Cursor is the editor built around how you build. Predicts your next edit, updates whole files with natural language, and answers complex codebase questions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              {/* Primary CTA */}
              <a
                href="#pricing"
                className="relative group overflow-hidden rounded-full p-[1px] text-center shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:shadow-cyan-500/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-purple via-blue-500 to-brand-cyan rounded-full"></span>
                <span className="relative block px-8 py-3.5 rounded-full bg-brand-purple text-base font-bold text-white transition-all group-hover:bg-transparent duration-300">
                  Start Building Free
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#demo"
                className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all duration-200 group"
              >
                <Play className="h-4 w-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </a>
            </motion.div>

            {/* Bullet list of brief highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 text-sm font-semibold text-slate-400 border-t border-brand-cardBorder/40 pt-6"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-brand-cyan flex-shrink-0" />
                <span>No extension setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-brand-cyan flex-shrink-0" />
                <span>Copilot imports in 1-click</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-brand-cyan flex-shrink-0" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-brand-cyan flex-shrink-0" />
                <span>Local-first indexing</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Code Editor Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-6 w-full flex items-center justify-center"
          >
            <div className="w-full max-w-2xl bg-brand-editorBg rounded-xl border border-brand-cardBorder shadow-2xl relative overflow-hidden group/editor">
              
              {/* Editor Header Bar */}
              <div className="bg-[#0b0819] px-4 py-3 border-b border-brand-cardBorder flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-400 font-medium flex items-center space-x-1.5 font-mono">
                  <Code className="h-3.5 w-3.5 text-brand-purple" />
                  <span>src/components/AIPredictor.jsx</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Editor Workspace Mockup */}
              <div className="grid grid-cols-12 font-mono text-xs md:text-sm p-4 min-h-[360px] bg-brand-editorBg text-[#94a3b8]">
                {/* Left Sidebar Mockup */}
                <div className="hidden sm:block sm:col-span-3 border-r border-brand-cardBorder/60 pr-4 text-slate-500 select-none text-[11px] leading-6">
                  <div className="text-slate-400 font-semibold mb-2">EXPLORER</div>
                  <div className="text-brand-cyan pl-2">📁 components</div>
                  <div className="text-brand-purple pl-4 font-semibold">⚡ AIPredictor.jsx</div>
                  <div className="pl-4">📄 CodeGenerator.js</div>
                  <div className="pl-4">📄 styles.css</div>
                  <div className="text-slate-400 mt-4 font-semibold">OUTLINE</div>
                  <div className="pl-2">𝑓 usePredictor()</div>
                  <div className="pl-2">𝑓 handleGeneration()</div>
                </div>

                {/* Editor Content Area */}
                <div className="col-span-12 sm:col-span-9 sm:pl-4 relative overflow-hidden leading-relaxed select-none">
                  {/* Code Snippet */}
                  <div className="text-slate-500">
                    <span className="text-purple-400">import</span> React, &#123; useState, useEffect &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'react'</span>;
                  </div>
                  <div className="text-slate-500 mt-1">
                    <span className="text-purple-400">import</span> &#123; motion &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'framer-motion'</span>;
                  </div>
                  <div className="mt-4">
                    <span className="text-blue-400">export default function</span> <span className="text-yellow-300">AIPredictor</span>() &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">const</span> [codeState, setCodeState] = <span className="text-yellow-300">useState</span>(<span className="text-emerald-400">'idle'</span>);
                  </div>

                  {/* Highlighted edit line */}
                  <div className="pl-4 mt-2 bg-brand-purple/10 border-l-2 border-brand-purple py-0.5 -mx-4 px-4 flex items-center justify-between">
                    <div>
                      <span className="text-blue-400">const</span> predictEdits = <span className="text-blue-400">async</span> () =&gt; &#123;
                    </div>
                  </div>

                  {/* Inline Autocomplete suggestion (Grayed text) */}
                  <div className="pl-8 mt-1 text-slate-600 italic flex items-center">
                    <span>// Cursor AI prediction: generates optimization path...</span>
                  </div>
                  <div className="pl-8 text-brand-cyan/60 font-semibold bg-brand-cyan/5 -mx-4 px-4 border-l-2 border-brand-cyan flex items-center justify-between py-1">
                    <div>
                      <span className="text-brand-purple font-semibold">const</span> result = <span className="text-brand-cyan">await</span> model.<span className="text-yellow-300">optimize</span>(fileHistory);
                    </div>
                    <span className="text-[10px] bg-brand-cyan/20 text-brand-cyan px-1.5 py-0.5 rounded border border-brand-cyan/30 uppercase tracking-wider font-semibold font-sans">
                      Tab to accept
                    </span>
                  </div>

                  <div className="pl-8 text-brand-cyan/60 font-semibold bg-brand-cyan/5 -mx-4 px-4 border-l-2 border-brand-cyan py-0.5">
                    <div>
                      <span className="text-brand-cyan">return</span> result.changes;
                    </div>
                  </div>

                  <div className="pl-4 mt-1">
                    &#125;;
                  </div>

                  <div className="mt-2">
                    <span className="text-purple-400">return</span> (
                  </div>
                  <div className="pl-4">
                    &lt;<span className="text-blue-400">div</span> className=<span className="text-emerald-400">"glow-effect"</span>&gt;
                  </div>
                  <div className="pl-8">
                    &lt;<span className="text-blue-400">button</span> onClick=&#123;predictEdits&#125;&gt;Analyze&lt;/<span className="text-blue-400">button</span>&gt;
                  </div>
                  <div className="pl-4">
                    &lt;/<span className="text-blue-400">div</span>&gt;
                  </div>
                  <div>
                    );
                  </div>
                  <div>
                    &#125;
                  </div>

                  {/* Floating AI Command Bar Mockup */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-card/95 border border-brand-purple/40 rounded-lg p-3 shadow-xl backdrop-blur-md flex items-center space-x-3 transition-transform duration-300 group-hover/editor:translate-y-[-5px]">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-purple/20 text-brand-purple flex-shrink-0 animate-pulse">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex-1 text-slate-300 font-sans text-xs">
                      <div className="font-semibold text-[11px] text-brand-cyan">AI INSTRUCTION</div>
                      <div className="text-white mt-0.5">"Create a fade-in scroll listener hook..."</div>
                    </div>
                    <div className="bg-[#1c1638] px-2 py-1 rounded text-[10px] text-purple-300 font-bold border border-brand-purple/30 font-sans uppercase">
                      ⌘ K
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
