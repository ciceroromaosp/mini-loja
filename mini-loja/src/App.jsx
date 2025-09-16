import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { ProductCard } from './components/ProductCard/ProductCard';
import { useTheme } from './hooks/useTheme';
import { products } from './data/products';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Simula um atraso de 2 segundos para carregar os dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, []);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="product-grid">
        {isLoading
          ? // Renderiza 6 skeletons durante o carregamento
            Array.from({ length: 6 }).map((_, index) => (
              <ProductCard key={index} loading={true} />
            ))
          : // Renderiza os produtos reais após o carregamento
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </main>
    </>
  );
}

export default App;