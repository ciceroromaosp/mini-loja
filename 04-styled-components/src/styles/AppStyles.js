import styled from 'styled-components';

export const ProductGrid = styled.main`
  padding: 80px ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  grid-template-columns: 1fr; /* 1 coluna por padrão */

  /* 2 colunas para telas > 480px */
  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 3 colunas para telas > 768px */
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* 4 colunas para telas > 1024px */
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;