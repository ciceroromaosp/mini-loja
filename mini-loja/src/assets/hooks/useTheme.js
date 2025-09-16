import { useState, useEffect } from 'react';

export function useTheme() {
  // Inicializa o tema buscando no localStorage ou usando 'light' como padrão
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Efeito que aplica a classe no HTML e salva no localStorage quando o tema muda
  useEffect(() => {
    const root = window.document.documentElement; // Pega o elemento <html>
    root.classList.remove('light', 'dark'); // Remove classes antigas
    root.classList.add(theme); // Adiciona a classe do tema atual
    localStorage.setItem('theme', theme); // Salva o tema no localStorage para persistência
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}