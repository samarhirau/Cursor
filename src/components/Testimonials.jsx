import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Cursor has completely replaced my VS Code setup. The inline auto-edit is like having an incredibly fast senior engineer sitting next to me. It is easily the best coding tool I have used in five years.",
    name: "Sarah Jenkins",
    role: "Senior Frontend Engineer",
    company: "Vercel",
    stars: 5,
    initials: "SJ",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "Refactoring legacy React codebases used to take a whole afternoon of manual copy-pasting. With Cursor's Command-K, it is done in under 5 minutes. The context comprehension is unmatched.",
    name: "David Chen",
    role: "Tech Lead",
    company: "Stripe",
    stars: 5,
    initials: "DC",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    quote: "We built our entire MVP dashboard prototype in a single weekend. As a solo founder, my developer velocity has quadrupled. I cannot imagine returning to standard IDEs.",
    name: "Elena Rostova",
    role: "Co-Founder & CTO",
    company: "DevSync",
    stars: 5,
    initials: "ER",
    gradient: "from-emerald-400 to-cyan-500"
  },
  {
    quote: "The codebase search indexes instantly. I can ask questions about complex dependencies and get accurate, file-specific edit plans in a second. It is a game changer for staff engineers.",
    name: "Marcus Miller",
    role: "Principal Architect",
    company: "Supabase",
    stars: 5,
    initials: "MM",
    gradient: "from-amber-400 to-rose-500"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Slide transition configurations
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    })
  };

  return (
    <section className="py-24 bg-brand-bg/90 relative overflow-hidden border-t border-brand-cardBorder/30">
      <div className="glow-blob bg-brand-purple w-[30rem] h-[30rem] top-10 right-10 opacity-5"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 rounded-full px-3 py-1 mb-4">
            <MessageSquare className="h-4 w-4 text-brand-cyan" />
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">Loved by Developers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-white-gray mb-4">
            Built for the modern engineer
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            See how teams are shipping production-grade code faster than ever before.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glass-card p-8 md:p-12 border border-brand-cardBorder bg-[#0a081b]/70 flex flex-col justify-between"
            >
              <div>
                {/* Five Star Icons */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed italic mb-8">
                  "{TESTIMONIALS[currentIndex].quote}"
                </blockquote>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between border-t border-brand-cardBorder/40 pt-6">
                <div className="flex items-center space-x-4">
                  {/* Avatar Icon */}
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-tr ${TESTIMONIALS[currentIndex].gradient} flex items-center justify-center text-white font-bold text-base shadow-lg shadow-purple-500/10`}>
                    {TESTIMONIALS[currentIndex].initials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">
                      {TESTIMONIALS[currentIndex].name}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {TESTIMONIALS[currentIndex].role} @ <span className="text-brand-cyan">{TESTIMONIALS[currentIndex].company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 translate-y-[-50%] p-2 rounded-full border border-brand-cardBorder bg-brand-card hover:bg-brand-purple hover:border-brand-purple text-slate-400 hover:text-white transition-all duration-200 z-20 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 translate-y-[-50%] p-2 rounded-full border border-brand-cardBorder bg-brand-card hover:bg-brand-purple hover:border-brand-purple text-slate-400 hover:text-white transition-all duration-200 z-20 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center space-x-2.5 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-8 bg-brand-cyan' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
