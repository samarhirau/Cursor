import React from 'react';
import { UserProfile } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#030014] text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0824_1px,transparent_1px),linear-gradient(to_bottom,#0c0824_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
      <div className="glow-blob bg-brand-purple w-[25rem] h-[25rem] -top-20 -left-20 opacity-15"></div>
      <div className="glow-blob bg-brand-cyan w-[25rem] h-[25rem] bottom-10 right-0 opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        {/* Profile Card Centering */}
        <div className="flex justify-center">
          <UserProfile
            routing="path"
            path="/profile"
            appearance={{
              variables: {
                colorPrimary: '#7C3AED',
                colorBackground: '#0B081E',
                colorInputBackground: '#090714',
                colorInputText: '#FFFFFF',
                colorText: '#F8FAFC',
                colorTextSecondary: '#94A3B8',
              },
              elements: {
                card: 'border border-[#1F1A3A] bg-[#0B081E] shadow-2xl rounded-2xl w-full',
                headerTitle: 'text-white font-bold text-xl',
                headerSubtitle: 'text-slate-400 text-xs',
                navbar: 'border-r border-[#1F1A3A] pr-4',
                navbarButton: 'text-slate-400 hover:text-white hover:bg-white/5 transition-colors',
                navbarButtonActive: 'text-brand-purple bg-brand-purple/10 font-bold',
                scrollBox: 'bg-[#0B081E]',
                pageScrollBox: 'bg-[#0B081E]',
                profileSectionTitleText: 'text-white font-semibold border-b border-[#1F1A3A] pb-2',
                formButtonPrimary: 'bg-brand-purple hover:bg-brand-purpleHover text-white shadow-lg transition-all',
                formFieldLabel: 'text-slate-300 font-semibold',
                formFieldInput: 'bg-[#090714] border border-[#1F1A3A] text-white focus:border-brand-purple focus:ring-1 focus:ring-brand-purple',
                accordionTriggerButton: 'text-white hover:bg-white/5',
                avatarImageActionsUpload: 'text-brand-cyan hover:text-cyan-300',
                userPreviewSecondaryIdentifier: 'text-slate-400',
                userPreviewTextContainer: 'text-white',
                breadcrumbsItem: 'text-slate-400',
                breadcrumbsItemActive: 'text-white',
                badge: 'bg-brand-purple/20 border border-brand-purple/30 text-brand-purple text-xs font-semibold'
              }
            }}
          />
        </div>

      </div>
    </div>
  );
}
