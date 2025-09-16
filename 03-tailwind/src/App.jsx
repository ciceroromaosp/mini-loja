// Este é o nosso App principal, pronto para receber as classes do Tailwind
import { useState, useEffect } from 'react';
import { products } from './data/products';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar virá aqui */}
      <main>
        <h1>Produtos</h1>
        {/* Grid de produtos virá aqui */}
      </main>
    </>
  );
}

export default App;