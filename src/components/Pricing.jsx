import React, { useState } from 'react';
import { Check, Info, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  const plans = [
    {
      name: 'Free',
      priceMonthly: 0,
      priceYearly: 0,
      desc: 'Get a taste of AI-assisted programming.',
      popular: false,
      features: [
        'Basic smart autocomplete',
        '50 AI Chat assistant requests/mo',
        'Local file indexing context',
        'Standard community support',
        'Access to basic open models'
      ]
    },
    {
      name: 'Pro',
      priceMonthly: 20,
      priceYearly: 16,
      desc: 'The complete AI toolkit for professionals.',
      popular: true,
      features: [
        'Unlimited smart autocomplete',
        '500 fast GPT-4o & Claude-3.5 queries/mo',
        'Unlimited slow/relax queries',
        'Complete codebase vector index',
        'Multi-file edits & Terminal agent',
        'Priority discord & email support'
      ]
    },
    {
      name: 'Team',
      priceMonthly: 40,
      priceYearly: 32,
      desc: 'Collaborative controls and premium security.',
      popular: false,
      features: [
        'Everything included in Pro',
        'SSO, SAML & central workspace controls',
        'Zero-data retention compliance by default',
        'Shared context embeddings for your team',
        'Dedicated success manager support',
        'Custom billing & usage dashboards'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-bg relative overflow-hidden border-t border-brand-cardBorder/30">
      <div className="glow-blob bg-brand-purple w-[30rem] h-[30rem] top-1/4 left-0 opacity-10"></div>
      <div className="glow-blob bg-brand-cyan w-[25rem] h-[25rem] bottom-1/4 right-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 select-none">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-white-gray mb-4">
            Simple, developer-friendly pricing
          </h2>
          <p className="text-lg text-slate-400 font-medium mb-8">
            Start building for free, upgrade when you need faster AI responses.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center bg-[#090715] p-1.5 rounded-full border border-brand-cardBorder">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-1 ${
                billingCycle === 'yearly'
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly;
            
            return (
              <div
                key={idx}
                className={`glass-card p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'border-brand-purple bg-[#0a071d]/85 shadow-premium-glow shadow-purple-500/10 md:-translate-y-2'
                    : 'bg-[#090714]/60 hover:border-brand-cardBorder/80'
                }`}
              >
                {/* Glow overlay for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-purple via-blue-500 to-brand-cyan"></div>
                )}

                {/* Popular Tag */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-brand-purple/20 border border-brand-purple/30 rounded-full px-3 py-1 flex items-center space-x-1.5 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
                    <span className="text-[10px] font-bold text-brand-cyan tracking-wider uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[40px] font-medium">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-extrabold text-white">$</span>
                    <span className="text-6xl font-extrabold text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-slate-400 text-sm font-semibold ml-2">
                      / user / month
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-brand-cardBorder/40 pt-8 mb-8">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      WHAT IS INCLUDED
                    </div>
                    {/* Features checklist */}
                    <ul className="space-y-3.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-3 text-sm text-slate-300 font-medium">
                          <Check className="h-4 w-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA Button */}
                <a
                  href="#signup"
                  className={`block w-full py-3.5 rounded-full text-center text-sm font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-brand-purple hover:bg-brand-purpleHover text-white shadow-lg shadow-brand-purple/20 hover:scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Subscribe Now'}
                </a>
              </div>
            );
          })}
        </div>

        {/* Pricing Notice */}
        <div className="mt-12 text-center text-xs text-slate-500 font-medium flex items-center justify-center space-x-1.5 select-none">
          <Info className="h-3.5 w-3.5 text-brand-cyan" />
          <span>Local autocomplete indexing never contacts any third party LLM APIs.</span>
        </div>

      </div>
    </section>
  );
}
