export const codeExamples = {
    "App.jsx": `
import { useState, useEffect } from "react";
import { BadMood } from "@badmood/ai";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CodeEditor } from "./components/CodeEditor";

function App() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const savedCode = localStorage.getItem('userCode');
    if (savedCode) {
      setCode(savedCode);
    }
  }, []);

  const handleAICompletion = async () => {
    if (!code.trim()) return;
    
    setIsLoading(true);
    try {
      const suggestion = await BadMood.complete(code, {
        language: "javascript",
        context: "react-component"
      });
      
      setSuggestions(prev => [suggestion, ...prev.slice(0, 3)]);
      setCode(prev => prev + "n\n" + suggestion);
      localStorage.setItem('userCode', code + "\n\n" + suggestion);
    } catch (error) {
      console.error("AI completion failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearCode = () => {
    setCode("");
    setSuggestions([]);
    localStorage.removeItem('userCode');
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <CodeEditor
          value={code}
          onChange={setCode}
          onAIRequest={handleAICompletion}
          onClear={handleClearCode}
          isLoading={isLoading}
        />
        {isLoading && (
          <div className="loading">
            <div className="spinner"></div>
            AI is generating code...
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
    `,

    "Hero.jsx": `export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Smart <span className="highlight">Code Editor</span>
        </h1>
        <p className="hero-subtitle">
          Start typing to get intelligent AI suggestions powered by BadMood AI. 
          Write better code faster with real-time completions.
        </p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">⚡</span>
            Instant AI Suggestions
          </div>
          <div className="feature">
            <span className="feature-icon">🎯</span>
            Context-Aware Completions
          </div>
          <div className="feature">
            <span className="feature-icon">🔄</span>
            Real-time Refactoring
          </div>
        </div>
      </div>
    </section>
  );
}`,

    "Navbar.jsx": `export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">
            <span className="logo-icon">💻</span>
            BadMood AI
          </div>
        </div>
        
        <div className="navbar-actions">
          <button className="ai-button primary">
            <span className="button-icon">✨</span>
            Get AI Help
          </button>
        </div>
      </div>
    </nav>
  );
}`,
};

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time",
    },
    "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "ϟ",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",
    },
    "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🔍",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time",
    },
};
