import { Button } from '../Button/Button';
import { Skeleton } from './Skeleton';
import styles from './ProductCard.module.css'; // Importa o CSS Module

const formatPrice = (price) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const Rating = ({ value }) => {
  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < value ? styles.filled : ''}>★</span>
      ))}
    </div>
  );
};

export function ProductCard({ product, loading = false }) {
  if (loading) {
    return <Skeleton />;
  }
  
  const tagClassName = product.tag === 'Novo' ? styles.tagNew : styles.tagPromo;

  return (
    <div className={styles.productCard}>
      {product.tag && (
        <span className={`${styles.tag} ${tagClassName}`}>
          {product.tag}
        </span>
      )}
      <img
        src={product.imageUrl}
        alt={product.title}
        className={styles.productImage}
        loading="lazy"
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>{formatPrice(product.price)}</p>
        <Rating value={product.rating} />
      </div>
      <Button variant="solid">Adicionar</Button>
    </div>
  );
}