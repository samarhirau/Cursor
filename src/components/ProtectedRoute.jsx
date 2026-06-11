import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-[#030014] z-[100] flex flex-col items-center justify-center text-white">
        <div className="relative flex flex-col items-center">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px] animate-pulse">
            <div className="h-full w-full rounded-2xl bg-[#030014] flex items-center justify-center">
              <Terminal className="h-8 w-8 text-brand-cyan animate-bounce" />
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-500 font-mono tracking-widest uppercase">
            Verifying Authentication...
          </div>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    // Redirect to sign-in, save current location
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}
