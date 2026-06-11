import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TermIcon, FileCode, Check, Play, RefreshCw, AlertTriangle, ShieldCheck } from 'lucide-react';

const DEMO_TABS = [
  {
    id: 'refactor',
    label: 'Refactor Code',
    icon: <RefreshCw className="h-4 w-4" />,
    request: 'Refactor this callback-heavy function using modern async/await and error handling.',
    responseExplanation: 'I have rewritten the function to use async/await. I wrapped the code in a try-catch block for robust error handling and consolidated multiple steps.',
    initialCode: `function fetchUserData(userId, callback) {
  getUser(userId, function(err, user) {
    if (err) return callback(err);
    getProfile(user.profileId, function(err, profile) {
      if (err) return callback(err);
      getSettings(user.id, function(err, settings) {
        if (err) return callback(err);
        callback(null, { user, profile, settings });
      });
    });
  });
}`,
    aiCode: `async function fetchUserData(userId) {
  try {
    const user = await getUser(userId);
    const [profile, settings] = await Promise.all([
      getProfile(user.profileId),
      getSettings(user.id)
    ]);
    return { user, profile, settings };
  } catch (error) {
    console.error(\`Failed to load data for user \${userId}:\`, error);
    throw new Error('User data retrieval failed');
  }
}`
  },
  {
    id: 'bugfix',
    label: 'Fix Security Bug',
    icon: <ShieldCheck className="h-4 w-4" />,
    request: 'Fix the SQL injection vulnerability in this node login handler.',
    responseExplanation: 'The user inputs were concatenated directly into the query, causing SQL injection risks. I have replaced it with parameterized SQL queries using prepared statements.',
    initialCode: `app.post('/login', (req, res) => {
  const query = "SELECT * FROM users WHERE user = '" 
    + req.body.username + "' AND pass = '" 
    + req.body.password + "'";
  db.query(query, (err, result) => {
    if (result.length > 0) res.send('Logged In');
    else res.send('Fail');
  });
});`,
    aiCode: `app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE user = ? AND pass = ?';
  try {
    const [rows] = await db.execute(sql, [username, password]);
    if (rows.length > 0) {
      return res.status(200).json({ success: true, message: 'Logged In' });
    }
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});`
  },
  {
    id: 'test',
    label: 'Generate Unit Test',
    icon: <FileCode className="h-4 w-4" />,
    request: 'Generate a comprehensive Vitest/Jest unit test for the calculateCartTotal handler.',
    responseExplanation: 'Here is a comprehensive unit test suite covering empty carts, item multiplication, discounts, and taxes.',
    initialCode: `function calculateCartTotal(items, discountRate = 0, taxRate = 0.08) {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discounted = subtotal * (1 - discountRate);
  return discounted * (1 + taxRate);
}`,
    aiCode: `import { describe, it, expect } from 'vitest';

describe('calculateCartTotal()', () => {
  it('returns 0 for an empty cart list', () => {
    expect(calculateCartTotal([])).toBe(0);
  });

  it('calculates the correct subtotal with item quantities', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 }
    ];
    expect(calculateCartTotal(items, 0, 0)).toBe(25);
  });

  it('applies discounts and tax rates correctly', () => {
    const items = [{ price: 100, quantity: 1 }];
    const total = calculateCartTotal(items, 0.1, 0.1); // 90 * 1.1 = 99
    expect(total).toBeCloseTo(99);
  });
});`
  }
];

export default function InteractiveDemo() {
  const [activeTabId, setActiveTabId] = useState('refactor');
  const [displayedExplanation, setDisplayedExplanation] = useState('');
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingTimerRef = useRef(null);

  const activeTab = DEMO_TABS.find(t => t.id === activeTabId) || DEMO_TABS[0];

  useEffect(() => {
    // Reset and start typing
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
    }

    setDisplayedExplanation('');
    setDisplayedCode('');
    setIsTyping(true);

    let explanationText = activeTab.responseExplanation;
    let codeText = activeTab.aiCode;

    let currentExpIndex = 0;
    let currentCodeIndex = 0;

    // Phase 1: Type AI explanation text
    typingTimerRef.current = setInterval(() => {
      if (currentExpIndex < explanationText.length) {
        setDisplayedExplanation(prev => prev + explanationText.charAt(currentExpIndex));
        currentExpIndex++;
      } else {
        // Phase 2: Once explanation finishes, start typing code side
        clearInterval(typingTimerRef.current);
        
        typingTimerRef.current = setInterval(() => {
          if (currentCodeIndex < codeText.length) {
            setDisplayedCode(prev => prev + codeText.charAt(currentCodeIndex));
            currentCodeIndex++;
          } else {
            clearInterval(typingTimerRef.current);
            setIsTyping(false);
          }
        }, 12); // Speed of typing code
      }
    }, 15); // Speed of typing explanation

    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }
    };
  }, [activeTabId]);

  return (
    <section id="demo" className="py-24 bg-brand-bg/90 relative overflow-hidden">
      <div className="glow-blob bg-brand-cyan w-[25rem] h-[25rem] top-10 left-10 opacity-10"></div>
      <div className="glow-blob bg-brand-purple w-[30rem] h-[30rem] bottom-10 right-10 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full px-3 py-1 mb-4">
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">Interactive Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-white-gray mb-4">
            Experience the AI intelligence
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Toggle below to see how Cursor solves common programming dilemmas instantly.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {DEMO_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full border transition-all duration-300 font-semibold text-sm ${
                activeTabId === tab.id
                  ? 'bg-brand-purple border-brand-purple text-white shadow-lg shadow-brand-purple/20'
                  : 'bg-brand-card/40 border-brand-cardBorder text-slate-400 hover:text-white hover:border-brand-purple/40'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Mockup Workspace Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-brand-editorBg/60 border border-brand-cardBorder rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md min-h-[500px]">
          
          {/* Left Side: Code Editor Input & AI Prompt Instruction */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-cardBorder p-6 bg-brand-editorBg/30">
            <div>
              {/* File Header */}
              <div className="flex items-center space-x-2 text-xs text-slate-500 mb-4 font-mono select-none">
                <FileCode className="h-4 w-4 text-brand-cyan" />
                <span>input_source.js (Original Code)</span>
              </div>
              {/* Original Code Display */}
              <pre className="font-mono text-xs md:text-sm text-slate-400 leading-relaxed overflow-x-auto whitespace-pre p-4 bg-[#0a0817] rounded-xl border border-brand-cardBorder/50 max-h-[260px]">
                <code>{activeTab.initialCode}</code>
              </pre>
            </div>

            {/* Instruction Bubble */}
            <div className="mt-6 border border-brand-purple/30 bg-brand-purple/5 rounded-xl p-4 relative overflow-hidden group">
              <div className="text-[10px] text-brand-cyan font-bold font-mono tracking-wider uppercase mb-1 flex items-center space-x-1">
                <TermIcon className="h-3.5 w-3.5" />
                <span>USER INSTRUCTION (⌘K)</span>
              </div>
              <p className="text-white text-sm font-medium leading-relaxed italic">
                "{activeTab.request}"
              </p>
            </div>
          </div>

          {/* Right Side: Simulated AI Chat & Refactored output */}
          <div className="lg:col-span-7 flex flex-col p-6">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-brand-cardBorder/60 pb-3 mb-4 select-none">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse"></div>
                <span className="font-mono text-xs font-semibold text-brand-cyan">AI-ASSISTANT OUTPUT</span>
              </div>
              <div className="flex items-center space-x-1 text-slate-500 text-xs font-mono">
                <span className="bg-brand-cardBorder px-2 py-0.5 rounded text-[10px] text-slate-400">GPT-4o</span>
              </div>
            </div>

            {/* AI Response Explanation (Text typing) */}
            <div className="text-slate-300 font-sans text-sm mb-4 leading-relaxed bg-[#0a0817] p-3 rounded-lg border border-brand-cardBorder/40">
              <span className="font-semibold text-brand-cyan mr-1.5">AI:</span>
              <span>{displayedExplanation}</span>
              {isTyping && displayedCode === '' && <span className="cursor-blink"></span>}
            </div>

            {/* AI Code output (Code typing) */}
            <div className="flex-1 min-h-[220px] bg-brand-editorBg rounded-xl border border-brand-cardBorder overflow-hidden relative flex flex-col">
              
              {/* Output Tab Title */}
              <div className="bg-[#0b0819] px-4 py-2 border-b border-brand-cardBorder/60 flex items-center justify-between select-none">
                <span className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-white">Refactored Result</span>
                </span>
                {isTyping && (
                  <span className="text-[9px] text-brand-cyan animate-pulse font-mono tracking-wider font-semibold">
                    GENERATING...
                  </span>
                )}
              </div>

              {/* Code Panel */}
              <pre className="p-4 font-mono text-xs md:text-sm text-slate-300 leading-relaxed overflow-x-auto whitespace-pre flex-1 bg-brand-editorBg">
                <code>{displayedCode}</code>
                {isTyping && displayedCode !== '' && <span className="cursor-blink"></span>}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
