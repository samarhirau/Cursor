import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Terminal, Shield, Code, Settings, User, Cpu, Activity, LogOut } from 'lucide-react';
import { useClerk } from '@clerk/clerk-react';

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <Terminal className="h-8 w-8 text-brand-cyan animate-bounce" />
          <span className="text-sm text-slate-400">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  const primaryEmail = user?.primaryEmailAddress?.emailAddress || 'No email associated';
  const joinedDate = user?.createdAt 
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'N/A';

  // Mock activity logs
  const activities = [
    { time: '10:45 AM', action: 'Refactored fetchUserData() using async/await', type: 'refactor' },
    { time: '9:30 AM', action: 'Fixed SQL injection bug in node login handler', type: 'bugfix' },
    { time: 'Yesterday', action: 'Generated Jest unit test suite for calculateCartTotal()', type: 'test' },
    { time: '2 days ago', action: 'Authorized GitHub organization scope context', type: 'system' }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0824_1px,transparent_1px),linear-gradient(to_bottom,#0c0824_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
      <div className="glow-blob bg-brand-purple w-[25rem] h-[25rem] -top-20 -left-20 opacity-15"></div>
      <div className="glow-blob bg-brand-cyan w-[25rem] h-[25rem] bottom-10 right-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Greetings */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 pb-6 border-b border-brand-cardBorder/30">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gradient-white-gray mb-1">
              Welcome back, {user?.firstName || 'Developer'}!
            </h1>
            <p className="text-slate-400 text-sm font-medium">
              Manage your AI billing, autocomplete models, and workspace permissions.
            </p>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Link
              to="/profile"
              className="flex items-center space-x-1 px-4 py-2 rounded-full border border-brand-cardBorder bg-[#0c0824]/40 hover:bg-white/5 text-sm text-slate-300 font-semibold transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Edit Profile</span>
            </Link>
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-1 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10 text-sm text-rose-400 font-semibold transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Account Info & Usage Stats */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Account Information Card */}
            <div className="glass-card p-6 border border-brand-cardBorder bg-[#090714]/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Shield className="h-32 w-32 text-brand-purple" />
              </div>

              <h2 className="text-lg font-bold text-white mb-6 flex items-center space-x-2 select-none">
                <Shield className="h-5 w-5 text-brand-cyan" />
                <span>Account Information</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Avatar Display */}
                <img
                  src={user?.imageUrl}
                  alt="Avatar"
                  className="h-20 w-20 rounded-2xl border-2 border-brand-purple/40 shadow-lg"
                />
                
                {/* Account details */}
                <div className="flex-1 w-full text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Full Name</div>
                    <div className="text-white text-base font-semibold">{user?.fullName || 'Not provided'}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Address</div>
                    <div className="text-white text-base font-semibold truncate">{primaryEmail}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Joined Date</div>
                    <div className="text-white text-base font-semibold">{joinedDate}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Authentication Provider</div>
                    <div className="text-brand-cyan text-sm font-semibold flex items-center justify-center sm:justify-start space-x-1.5 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse"></span>
                      <span>Google/OAuth Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Autocomplete status */}
              <div className="glass-card p-5 border border-brand-cardBorder bg-[#090714]/60 flex items-center space-x-4">
                <div className="h-10 w-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Autocomplete</div>
                  <div className="text-white font-bold text-sm">Active (Fast Mode)</div>
                </div>
              </div>
              {/* CPU context status */}
              <div className="glass-card p-5 border border-brand-cardBorder bg-[#090714]/60 flex items-center space-x-4">
                <div className="h-10 w-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Model Context</div>
                  <div className="text-white font-bold text-sm">Claude 3.5 Sonnet</div>
                </div>
              </div>
              {/* Settings status */}
              <div className="glass-card p-5 border border-brand-cardBorder bg-[#090714]/60 flex items-center space-x-4">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Settings className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Config Settings</div>
                  <div className="text-white font-bold text-sm">Synced (Default)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Usage progress ring & Recent Activity logs */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* AI quota progress */}
            <div className="glass-card p-6 border border-brand-cardBorder bg-[#090714]/80 flex flex-col items-center text-center">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                MONTHLY AI QUOTA
              </h2>
              
              {/* Circular glow progress wheel */}
              <div className="relative h-32 w-32 flex items-center justify-center mb-6">
                <svg className="absolute transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                  <circle cx="50" cy="50" r="40" stroke="url(#cyanPurpleGradient)" strokeWidth="6" fill="transparent" strokeDasharray="251.2" strokeDashoffset="175.8" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="cyanPurpleGradient" x1="1" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center relative z-10 font-mono">
                  <span className="text-2xl font-bold text-white">30%</span>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">150 / 500</p>
                </div>
              </div>

              <div className="text-xs text-slate-400 font-medium leading-relaxed max-w-[200px]">
                You have <span className="text-brand-cyan font-bold">350 fast requests</span> left. Reset on July 11.
              </div>
            </div>

            {/* Recent activity log */}
            <div className="glass-card p-6 border border-brand-cardBorder bg-[#090714]/80">
              <h2 className="text-sm font-bold text-white mb-4 flex items-center space-x-2 select-none">
                <Activity className="h-4 w-4 text-brand-purple" />
                <span>Recent AI Operations</span>
              </h2>

              <ul className="space-y-4">
                {activities.map((act, idx) => (
                  <li key={idx} className="flex flex-col text-xs border-l-2 border-brand-purple/30 pl-3.5 py-0.5">
                    <span className="text-slate-500 font-mono mb-0.5">{act.time}</span>
                    <span className="text-slate-300 font-medium line-clamp-1">{act.action}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
