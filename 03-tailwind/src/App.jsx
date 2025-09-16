import React from 'react'; // <-- ADICIONE ESTA LINHA
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { ProductCard } from './components/ProductCard/ProductCard';
import { useTheme } from './hooks/useTheme';
import { products } from './data/products';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="pt-[80px] p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductCard key={index} loading={true} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </main>
    </div>
  );
}

export default App;