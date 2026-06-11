import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Terminal, ArrowLeft } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Grids and Blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0824_1px,transparent_1px),linear-gradient(to_bottom,#0c0824_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"></div>
      
      <div className="glow-blob bg-brand-purple w-[25rem] h-[25rem] -top-10 -left-10 animate-float opacity-20"></div>
      <div className="glow-blob bg-brand-cyan w-[20rem] h-[20rem] bottom-10 right-0 animate-float-delayed opacity-20"></div>

      {/* Return to Home link */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          to="/"
          className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Landing Page</span>
        </Link>
      </div>

      {/* Header logo */}
      <div className="relative z-10 mb-8 flex flex-col items-center select-none">
        <Link to="/" className="flex items-center space-x-2 text-white group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px] flex items-center justify-center">
            <div className="h-full w-full rounded-xl bg-brand-bg flex items-center justify-center">
              <Terminal className="h-5.5 w-5.5 text-brand-cyan" />
            </div>
          </div>
          <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            cursor<span className="text-brand-cyan">.ai</span>
          </span>
        </Link>
      </div>

      {/* Auth Cards Container */}
      <div className="relative z-10 w-full max-w-md flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
