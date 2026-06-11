import React from 'react';
import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <SignUp
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
      forceRedirectUrl="/dashboard"
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
          socialButtonsBlockButton: 'bg-[#16122C] hover:bg-[#1C1638] text-white border border-[#1F1A3A] transition-colors duration-200',
          socialButtonsBlockButtonText: 'text-white font-semibold',
          formButtonPrimary: 'bg-brand-purple hover:bg-brand-purpleHover text-white shadow-lg shadow-purple-500/10 transition-all duration-200 py-2.5',
          formFieldLabel: 'text-slate-300 text-xs font-semibold',
          formFieldInput: 'bg-[#090714] border border-[#1F1A3A] text-white rounded-lg focus:border-brand-purple focus:ring-1 focus:ring-brand-purple py-2',
          footerActionLink: 'text-brand-cyan hover:text-cyan-300 font-semibold',
          dividerText: 'text-slate-500 text-xs',
          dividerLine: 'bg-[#1F1A3A]',
          identityPreviewText: 'text-white',
          identityPreviewEditButtonIcon: 'text-brand-purple',
        }
      }}
    />
  );
}
