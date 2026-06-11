import React from 'react';

export default function TrustedBy() {
  const logos = [
    {
      name: 'Vercel',
      svg: (
        <svg className="h-6 text-slate-500 hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
        </svg>
      ),
    },
    {
      name: 'Stripe',
      svg: (
        <svg className="h-7 text-slate-500 hover:text-white transition-colors duration-200" viewBox="0 0 80 24" fill="currentColor">
          <path d="M41 11.2c0-2.3-1.8-3.5-4.8-3.5-2.9 0-5.3 1.2-5.3 3.6 0 3.8 10.1 2.2 10.1 6.5 0 1.9-1.6 2.8-4.5 2.8-3.4 0-5.9-1.2-5.9-3.7h-3.9c0 4.8 4.7 7 9.8 7 5.2 0 8.6-2.1 8.6-6.1.1-4.6-10.1-2.6-10.1-6.6 0-1.5 1.3-2.3 3.8-2.3 2.9 0 4.5.9 4.5 2.5H41zm14.3.4c0-2.3-1.6-3.8-4.3-3.8-2.9 0-4.9 1.7-4.9 4.2v9h3.9v-5.2c0-1.8 1.1-2.6 2.6-2.6.4 0 .8.1 1 .2v-3.7c-.3-.1-.7-.1-1-.1s-1.1.2-1.3.6v-2.3h-4v2.3c.2.4 0 9 0 9h3.9v-5.1c-.2-.4.1-3.8 4.1-3.8zm9.5-3.8c-1.3 0-2.3.6-2.8 1.5V2.4h-3.9v18.8h3.9v-8.8c0-2.2 1.4-3.1 3-3.1.4 0 .7.1.9.2v-3.7c-.2-.1-.5-.2-1.1-.2z" />
        </svg>
      ),
    },
    {
      name: 'Linear',
      svg: (
        <svg className="h-6 text-slate-500 hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 13v1c0 1.1.9 2 2 2v3.93zm5.21-3.08c-.28-.53-.78-.85-1.35-.85H15v-2c0-.55-.45-1-1-1h-4v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      name: 'OpenAI',
      svg: (
        <svg className="h-6 text-slate-500 hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.74 11.9a4.84 4.84 0 0 0 2.21-4.06 4.9 4.9 0 0 0-7.38-4.23 4.88 4.88 0 0 0-8.2-1.68 4.89 4.89 0 0 0-6.19 6.22A4.89 4.89 0 0 0 .02 12.2a4.84 4.84 0 0 0-2.22 4.07 4.9 4.9 0 0 0 7.39 4.23 4.87 4.87 0 0 0 8.19 1.68 4.89 4.89 0 0 0 6.2-6.22 4.89 4.89 0 0 0 2.16-4.06zM13.68 4.3a3.3 3.3 0 0 1 1.63-.44c.91 0 1.77.37 2.4 1.05l-4.03 2.33v-2.94zm-3.36.44a3.3 3.3 0 0 1 1.63.44v5.82L7.92 8.68l.03-.02a3.29 3.29 0 0 1 2.37-3.92zm-5.26 3.1a3.29 3.29 0 0 1 .72-2.39l4.03 2.33v4.66L5.78 9.88a3.28 3.28 0 0 1-.72-2.04zm-.72 4.07a3.27 3.27 0 0 1-.03-1.68c.24-.87.82-1.6 1.6-2.05l4.03 2.33v2.94L6 13.91a3.29 3.29 0 0 1-2.06-2.02zm3.36 3.8a3.3 3.3 0 0 1-1.63-.44V9.45l5.03 2.91v5.82a3.3 3.3 0 0 1-3.4-3.03zm5.26 1.34a3.29 3.29 0 0 1-.72-1.64v-4.66l4.03 2.33v2.33a3.29 3.29 0 0 1-3.31 1.64zm4.03-3.8c-.24.87-.82 1.6-1.6 2.05L11.37 13v-2.94l4.03-2.33a3.29 3.29 0 0 1 1.6 4.31z" />
        </svg>
      ),
    },
    {
      name: 'Supabase',
      svg: (
        <svg className="h-6 text-slate-500 hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.362 9.356H12.92v-8.08c0-.62-.647-.99-1.155-.635L2.122 7.35c-.443.31-.568.917-.282 1.374.148.237.404.382.68.382h8.442v8.08c0 .62.648.99 1.156.635l9.643-6.71c.443-.31.568-.917.282-1.374a.82.82 0 0 0-.682-.382z" />
        </svg>
      ),
    },
    {
      name: 'Replit',
      svg: (
        <svg className="h-6 text-slate-500 hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2h20v20H2V2zm4 4v4h4V6H6zm8 0v4h4V6h-4zm-8 8v4h4v-4H6zm8 0v4h4v-4h-4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-brand-bg/50 border-y border-brand-cardBorder/40 py-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
          Trusted by over 100,000+ developers at hyper-growth companies
        </p>
      </div>

      <div className="logo-marquee-container relative flex">
        {/* Infinite scrolling items (rendered twice to loop seamless) */}
        <div className="logo-marquee-content animate-marquee space-x-12 sm:space-x-20">
          {logos.map((logo, idx) => (
            <div key={`${logo.name}-1-${idx}`} className="flex items-center space-x-2 grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none cursor-pointer">
              {logo.svg}
              <span className="font-bold text-lg text-slate-400 font-sans tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <div className="logo-marquee-content animate-marquee space-x-12 sm:space-x-20" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div key={`${logo.name}-2-${idx}`} className="flex items-center space-x-2 grayscale opacity-45 hover:opacity-100 hover:grayscale-0 transition-all duration-300 select-none cursor-pointer">
              {logo.svg}
              <span className="font-bold text-lg text-slate-400 font-sans tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
