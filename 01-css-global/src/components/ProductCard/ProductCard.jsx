import React from 'react';
import { Button } from '../Button/Button';
import { Skeleton } from './Skeleton';

const formatPrice = (price) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const Rating = ({ value }) => (
  <div className="rating">
    {[...Array(5)].map((_, i) => <span key={i} className={i < value ? 'filled' : ''}>★</span>)}
  </div>
);

export function ProductCard({ product, loading = false }) {
  if (loading) return <Skeleton />;
  return (
    <div className="product-card">
      {product.tag && <span className={`tag ${product.tag === 'Novo' ? 'tag-new' : 'tag-promo'}`}>{product.tag}</span>}
      <img src={product.imageUrl} alt={product.title} className="product-image" loading="lazy" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <Rating value={product.rating} />
      </div>
      <Button>Adicionar</Button>
    </div>
  );
}