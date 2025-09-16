import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Skeleton } from './Skeleton';

// --- Funções Auxiliares (sem alteração) ---
const formatPrice = (price) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Componentes Estilizados ---

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitionDuration};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: calc(${({ theme }) => theme.borderRadius} / 2);
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const InfoWrapper = styled.div`
  flex-grow: 1;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  height: 3rem; 
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const RatingWrapper = styled.div`
  color: ${({ theme }) => theme.border};
  .filled {
    color: ${({ theme }) => theme.colors.star};
  }
`;

const Tag = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  right: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  /* Cor de fundo baseada na prop 'type' */
  background-color: ${({ theme, type }) => (type === 'Novo' ? theme.colors.tagNew : theme.colors.tagPromo)};
`;

// --- Subcomponente Rating ---
const Rating = ({ value }) => (
  <RatingWrapper>
    {[...Array(5)].map((_, index) => (
      <span key={index} className={index < value ? 'filled' : ''}>★</span>
    ))}
  </RatingWrapper>
);

// --- Componente Principal ---
export function ProductCard({ product, loading = false }) {
  if (loading) {
    return <Skeleton />;
  }

  return (
    <CardWrapper>
      {product.tag && <Tag type={product.tag}>{product.tag}</Tag>}
      
      <ProductImage src={product.imageUrl} alt={product.title} loading="lazy" />
      
      <InfoWrapper>
        <Title>{product.title}</Title>
        <Price>{formatPrice(product.price)}</Price>
        <Rating value={product.rating} />
      </InfoWrapper>
      
      <Button variant="solid">Adicionar</Button>
    </CardWrapper>
  );
}