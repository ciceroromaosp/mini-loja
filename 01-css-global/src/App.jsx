import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { ProductCard } from './components/ProductCard/ProductCard';
import { useTheme } from './hooks/useTheme';
import { products } from './data/products';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="product-grid">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <ProductCard key={i} loading />)
          : products.map((p) => <ProductCard key={p.id} product={p} />)}
      </main>
    </>
  );
}
export default App;