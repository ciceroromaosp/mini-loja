import React from 'react';
import { Button } from '../Button/Button';
import { Skeleton } from './Skeleton';
import styles from './ProductCard.module.css';

const formatPrice = (price) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const Rating = ({ value }) => (
  <div className={styles.rating}>
    {[...Array(5)].map((_, i) => <span key={i} className={i < value ? styles.filled : ''}>★</span>)}
  </div>
);

export function ProductCard({ product, loading = false }) {
  if (loading) return <Skeleton />;
  
  const tagClass = product.tag === 'Novo' ? styles.new : styles.promo;

  return (
    <div className={styles.card}>
      {product.tag && <span className={`${styles.tag} ${tagClass}`}>{product.tag}</span>}
      <img src={product.imageUrl} alt={product.title} className={styles.image} loading="lazy" />
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <Rating value={product.rating} />
      </div>
      <Button>Adicionar</Button>
    </div>
  );
}