import React from 'react';
import styled, { css } from 'styled-components';

// Lógica de CSS para cada variante do botão.
// Usamos a função 'css' do styled-components para trechos de CSS reutilizáveis.
const variants = {
  solid: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.body};
    border: 1px solid transparent;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.body};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid transparent;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary}1A; // Adiciona alpha para transparência
    }
  `,
};

// Criamos um componente <button> estilizado
const StyledButton = styled.button`
  /* Estilos base, aplicados a todas as variantes */
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitionDuration};
  width: 100%;

  /* Aplica o estilo da variante baseado na prop 'variant' */
  ${({ variant }) => variants[variant]}

  /* Estilos para o estado 'disabled' */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

// Este é o componente que exportamos e usamos na aplicação
export function Button({ variant = 'solid', children, ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}