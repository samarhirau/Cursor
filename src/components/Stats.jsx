import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Users, MessageSquareCode, Award } from 'lucide-react';

function Counter({ endValue, duration = 2000, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(endValue);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = 30; // ms
    const totalSteps = Math.ceil(totalMiliseconds / incrementTime);
    const stepIncrement = (end - start) / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextVal = start + stepIncrement * currentStep;
      
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(nextVal);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, endValue, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statList = [
    {
      icon: <Rocket className="h-5 w-5 text-brand-cyan" />,
      endValue: '2.4',
      decimals: 1,
      suffix: 'M+',
      label: 'Projects Generated',
      desc: 'Repositories initialized and deployed with AI code structures.'
    },
    {
      icon: <Users className="h-5 w-5 text-brand-purple" />,
      endValue: '500',
      decimals: 0,
      suffix: 'K+',
      label: 'Active Developers',
      desc: 'Engineers from hobbyists to Fortune 500 team leads.'
    },
    {
      icon: <MessageSquareCode className="h-5 w-5 text-blue-400" />,
      endValue: '1.2',
      decimals: 1,
      suffix: 'B+',
      label: 'Suggestions Served',
      desc: 'Autocomplete lines, block edits, and Chat responses.'
    },
    {
      icon: <Award className="h-5 w-5 text-emerald-400" />,
      endValue: '140',
      decimals: 0,
      suffix: '%',
      label: 'Productivity Increase',
      desc: 'Average code production velocity boost reported by devs.'
    }
  ];

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden border-t border-brand-cardBorder/30">
      <div className="glow-blob bg-brand-blue w-[25rem] h-[25rem] top-1/2 right-0 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 border border-brand-cardBorder bg-[#0a0818]/70 flex flex-col justify-between"
            >
              <div>
                {/* Stat Icon Circle */}
                <div className="mb-4 h-9 w-9 rounded-lg bg-[#0e0b24] border border-brand-cardBorder flex items-center justify-center">
                  {stat.icon}
                </div>

                {/* Stat Big Number */}
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  <Counter 
                    endValue={stat.endValue} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </div>

                {/* Stat Label */}
                <div className="text-sm font-bold text-slate-200 mb-2 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>

              {/* Stat Brief Description */}
              <p className="text-xs text-slate-400 leading-relaxed mt-2 border-t border-brand-cardBorder/40 pt-3 font-medium">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
