import React from 'react';
import styled, { keyframes } from 'styled-components';

// 1. Define a animação de "pulso" usando keyframes
const skeletonAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// 2. Cria os componentes estilizados para o esqueleto
const SkeletonWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const SkeletonImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.border};
  border-radius: calc(${({ theme }) => theme.borderRadius} / 2);
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
`;

const SkeletonText = styled.div`
  height: 1rem;
  background-color: ${({ theme }) => theme.border};
  border-radius: calc(${({ theme }) => theme.borderRadius} / 2);
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  
  /* Modificadores baseados em props */
  width: ${({ short, tiny }) => (short ? '60%' : tiny ? '40%' : '100%')};
`;

// 3. Monta o componente Skeleton usando os blocos de estilo
export function Skeleton() {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <SkeletonText />
      <SkeletonText short />
      <SkeletonText tiny />
    </SkeletonWrapper>
  );
} 