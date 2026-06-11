import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import Layouts & Guards
import ProtectedRoute from './components/ProtectedRoute';
import AuthLayout from './layouts/AuthLayout';

// Import Pages
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/Profile';
import SettingsPage from './pages/Settings';

// Import Section Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SEO from './components/SEO';

// Public Landing Page Component
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-bg text-white selection:bg-brand-purple/40 selection:text-white"
    >
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <InteractiveDemo />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s loading transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <AnimatePresence mode="wait">
        {loading ? (
          /* Splash Loading Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#030014] z-[100] flex flex-col items-center justify-center text-white"
          >
            <div className="relative flex flex-col items-center">
              {/* Outer Pulsing Glow Border */}
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-cyan p-[1px] animate-pulse">
                <div className="h-full w-full rounded-2xl bg-[#030014] flex items-center justify-center">
                  <Terminal className="h-8 w-8 text-brand-cyan animate-bounce" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6 font-bold text-xl tracking-wider font-mono text-gradient-purple-cyan"
              >
                cursor.ai
              </motion.div>
              <div className="mt-2 text-xs text-slate-500 font-mono tracking-widest uppercase">
                Preparing Environment...
              </div>
            </div>
          </motion.div>
        ) : (
          /* Route definitions */
          <Routes key="routes">
            {/* Public landing page */}
            <Route path="/" element={<Home />} />

            {/* Auth layouts */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-in/*" element={<SignInPage />} />
              <Route path="/sign-up/*" element={<SignUpPage />} />
            </Route>

            {/* Protected dashboard settings */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Dashboard />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <ProfilePage />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <SettingsPage />
                  </>
                </ProtectedRoute>
              }
            />

            {/* Redirect fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}
