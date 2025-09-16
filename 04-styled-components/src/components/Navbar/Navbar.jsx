import React from 'react';
import styled from 'styled-components';

// --- Componentes Estilizados ---

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => `${theme.surface}CC`}; /* CC = 80% de opacidade */
  backdrop-filter: blur(5px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 10;
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const NavContent = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const CartBadge = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.tagPromo};
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
`;

// --- Componente Principal ---
export function Navbar({ onToggleTheme, theme }) {
  return (
    <HeaderWrapper>
      <NavContent>
        <Logo>MiniLoja</Logo>
        <ActionsWrapper>
          <ThemeToggle onClick={onToggleTheme} aria-label="Alternar tema">
            {theme === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
          <CartBadge>
            🛒
            <CartCount>3</CartCount>
          </CartBadge>
        </ActionsWrapper>
      </NavContent>
    </HeaderWrapper>
  );
}