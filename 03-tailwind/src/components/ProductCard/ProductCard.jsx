import React from 'react'; 
import { Button } from '../Button/Button';
import { Skeleton } from './Skeleton';

// Função auxiliar para formatar o preço para o padrão brasileiro (R$)
const formatPrice = (price) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// Subcomponente para renderizar as estrelas de avaliação
const Rating = ({ value }) => {
  return (
    <div className="text-border-light dark:text-border-dark">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < value ? 'text-star' : ''}>★</span>
      ))}
    </div>
  );
};

export function ProductCard({ product, loading = false }) {
  // Se estiver carregando, mostra o Skeleton
  if (loading) {
    return <Skeleton />;
  }

  // Mapeamento de tags para classes de cor
  const tagColors = {
    'Novo': 'bg-tag-new text-white',
    'Promo': 'bg-tag-promo text-white',
  };

  return (
    <div className="relative flex flex-col bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* TAG (Novo/Promo) */}
      {product.tag && (
        <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${tagColors[product.tag]}`}>
          {product.tag}
        </span>
      )}
      
      {/* IMAGEM */}
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full aspect-square object-cover rounded-sm mb-4"
        loading="lazy"
      />
      
      {/* INFORMAÇÕES */}
      <div className="flex-grow mb-4">
        <h3 className="text-base font-semibold line-clamp-2 h-12 mb-2">{product.title}</h3>
        <p className="text-xl font-bold text-primary dark:text-primary-dark mb-2">{formatPrice(product.price)}</p>
        <Rating value={product.rating} />
      </div>
      
      {/* BOTÃO */}
      <Button variant="solid" className="w-full">Adicionar</Button>
    </div>
  );
}