import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-cream/90 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white text-lg">🥔</span>
        </div>
        <span className="font-display text-xl font-bold text-primary">
          Potato Doctor
        </span>
      </div>
      <span className="text-sm font-body text-primary/50 hidden md:block">
        AI-Powered Leaf Diagnosis
      </span>
    </header>
  );
}
