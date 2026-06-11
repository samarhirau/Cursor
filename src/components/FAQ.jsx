import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Is my code secure? Will it be used to train models?",
    answer: "No. We prioritize security. Cursor offers a dedicated Privacy Mode where zero-data retention policies apply. Your code is processed in-memory to execute instructions and is never stored on disk, logged, or utilized to train LLMs."
  },
  {
    question: "Does Cursor support VS Code extensions?",
    answer: "Absolutely. Cursor is built as a fork of VS Code. This means all of your current themes, settings, keymaps, and extensions can be imported in a single click during the initial setup wizard. No rebuild required."
  },
  {
    question: "Can I use Cursor offline?",
    answer: "Yes. Core editing features, syntax highlighting, local git control, and local smart autocompletes work offline. Cloud-based LLM requests (such as codebase chat index and ⌘K edits) require a network connection."
  },
  {
    question: "Can I input my own OpenAI or Anthropic API keys?",
    answer: "Yes, you can configure your own API keys directly in the settings panel. This allows you to pay-as-you-go with third-party providers. Note that certain native editor optimizations are only available through Cursor Pro subscriptions."
  },
  {
    question: "What is the team data retention policy?",
    answer: "For Team subscriptions, zero-data retention is active by default. We do not store, review, or cache any codebase prompts, file contents, or terminal records from your team members. Custom deployment configurations are available on Enterprise plans."
  }
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="glass-card overflow-hidden bg-[#090714]/60 border border-brand-cardBorder/55 hover:border-brand-purple/20 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-bold text-white text-base md:text-lg pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-brand-cyan' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pb-6 px-6 border-t border-brand-cardBorder/20 pt-4 text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-bg/95 relative overflow-hidden border-t border-brand-cardBorder/30">
      <div className="glow-blob bg-brand-cyan w-[25rem] h-[25rem] bottom-10 left-10 opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-none">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-3 py-1 mb-4">
            <HelpCircle className="h-4 w-4 text-brand-cyan" />
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-white-gray mb-4">
            Got questions? We have answers.
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Learn more about features, safety setups, licensing, and editor customization options.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
