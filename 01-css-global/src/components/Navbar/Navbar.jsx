import React from 'react';

export function Navbar({ onToggleTheme, theme }) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1 className="logo">MiniLoja</h1>
        <div className="actions">
          <button onClick={onToggleTheme} className="theme-toggle" aria-label="Alternar tema">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className="cart-badge">
            🛒<span className="cart-count">3</span>
          </div>
        </div>
      </div>
    </header>
  );
}