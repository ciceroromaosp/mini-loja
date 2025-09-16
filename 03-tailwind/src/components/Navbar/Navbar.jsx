import React from 'react';

export function Navbar({ onToggleTheme, theme }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark shadow-md h-[60px] z-10">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-6">
        <h1 className="text-2xl font-extrabold">MiniLoja</h1>
        <div className="flex items-center gap-4">
          <button onClick={onToggleTheme} className="text-2xl" aria-label="Alternar tema">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className="relative text-2xl">
            🛒
            <span className="absolute -top-1 -right-2 bg-tag-promo text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}