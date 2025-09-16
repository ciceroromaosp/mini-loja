import React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ProductGrid } from './styles/AppStyles';

import { Navbar } from './components/Navbar/Navbar';
import { ProductCard } from './components/ProductCard/ProductCard';
import { products } from './data/products';

function App() {
  const { theme, toggleTheme } = useTheme();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <ProductGrid>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductCard key={index} loading={true} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ProductGrid>
    </ThemeProvider>
  );
}

export default App;