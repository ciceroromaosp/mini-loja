import styles from './Navbar.module.css';

export function Navbar({ onToggleTheme, theme }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <h1 className={styles.logo}>MiniLoja</h1>
        <div className={styles.actions}>
          <button onClick={onToggleTheme} className={styles.themeToggle} aria-label="Alternar tema">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <div className={styles.cartBadge}>
            🛒
            <span className={styles.cartCount}>3</span>
          </div>
        </div>
      </div>
    </header>
  );
}