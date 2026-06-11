import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Sliders, ToggleLeft, ToggleRight, Sparkles, Key } from 'lucide-react';

export default function SettingsPage() {
  const [telemetry, setTelemetry] = useState(false);
  const [model, setModel] = useState('claude-3.5-sonnet');
  const [contextSize, setContextSize] = useState('medium');
  const [apiKey, setApiKey] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1200); // 1.2s simulated API delay
  };

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

        {/* Settings Box */}
        <div className="glass-card p-6 md:p-8 border border-brand-cardBorder bg-[#090714]/80">
          
          <div className="flex items-center space-x-3 mb-8 border-b border-brand-cardBorder/40 pb-5 select-none">
            <Sliders className="h-6 w-6 text-brand-cyan" />
            <h1 className="text-2xl font-bold text-white">Editor settings</h1>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            
            {/* Setting 1: Select AI Model */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-300 flex items-center space-x-1">
                <Sparkles className="h-4 w-4 text-brand-purple" />
                <span>Primary AI Assistant Model</span>
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-[#080614] border border-brand-cardBorder focus:border-brand-purple rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="claude-3.5-sonnet">Claude 3.5 Sonnet (Recommended - Fastest)</option>
                <option value="gpt-4o">GPT-4o (Default General Purpose)</option>
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Extremely large context)</option>
                <option value="local-deepseek">Local DeepSeek-Coder 7B (Offline)</option>
              </select>
              <span className="text-xs text-slate-500 font-medium">
                Chooses which cloud LLM processes natural language ⌘K edits and chat context.
              </span>
            </div>

            {/* Setting 2: Context Window Limit */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-300">
                Codebase Index context scope
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['low', 'medium', 'high'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setContextSize(size)}
                    className={`py-3 rounded-lg border text-sm font-bold capitalize transition-all ${
                      contextSize === size
                        ? 'bg-brand-purple/20 border-brand-purple text-white'
                        : 'bg-brand-bg/40 border-brand-cardBorder text-slate-400 hover:text-white hover:border-brand-purple/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Controls the size of vector context fed to the AI model during queries. Higher values increase accuracy but consume quota faster.
              </span>
            </div>

            {/* Setting 3: Custom API Keys override */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-300 flex items-center space-x-1">
                <Key className="h-4 w-4 text-brand-cyan" />
                <span>Custom OpenAI API Key (Optional)</span>
              </label>
              <input
                type="password"
                placeholder="sk-proj-................................"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-[#080614] border border-brand-cardBorder focus:border-brand-purple rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
              />
              <span className="text-xs text-slate-500 font-medium font-sans">
                Provide your own key to bypass native subscription limitations. Left blank to use default Clerk session tokens.
              </span>
            </div>

            {/* Setting 4: Telemetry Privacy Switch */}
            <div className="flex items-center justify-between border-t border-brand-cardBorder/40 pt-6">
              <div>
                <label className="text-sm font-semibold text-slate-300">
                  Privacy Mode (Zero data retention)
                </label>
                <p className="text-xs text-slate-500 mt-1 max-w-md font-medium">
                  When enabled, we do not log codebase prompts, file names, or terminal actions on our cloud servers. Highly recommended for company repos.
                </p>
              </div>
              
              <button
                type="button"
                onClick={() => setTelemetry(!telemetry)}
                className="focus:outline-none transition-transform hover:scale-105"
              >
                {telemetry ? (
                  <ToggleRight className="h-10 w-10 text-brand-cyan" />
                ) : (
                  <ToggleLeft className="h-10 w-10 text-slate-600" />
                )}
              </button>
            </div>

            {/* Save Buttons & state indicators */}
            <div className="border-t border-brand-cardBorder/40 pt-6 flex items-center justify-between select-none">
              {saveSuccess ? (
                <span className="text-sm text-brand-cyan font-bold transition-all duration-300 animate-pulse">
                  ✓ Config successfully updated!
                </span>
              ) : (
                <div />
              )}

              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center space-x-2 px-6 py-3 bg-brand-purple hover:bg-brand-purpleHover disabled:bg-brand-purple/40 text-white font-bold text-sm rounded-full shadow-lg shadow-brand-purple/20 transition-all cursor-pointer"
              >
                <Save className="h-4.5 w-4.5" />
                <span>{isSaving ? 'Saving...' : 'Save Settings'}</span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}
