// Este objeto conterá todos os nossos tokens de design.
const tokens = {
  colors: {
    primary: '#007bff',
    primaryHover: '#0056b3',
    tagNew: '#28a745',
    tagPromo: '#dc3545',
    star: '#ffc107',
  },
  spacing: {
    1: '0.25rem', // 4px
    2: '0.5rem',  // 8px
    3: '0.75rem', // 12px
    4: '1rem',    // 16px
    6: '1.5rem',  // 24px
    8: '2rem',    // 32px
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  borderRadius: '0.5rem',
  fontFamily: "'Inter', system-ui, sans-serif",
  transitionDuration: '200ms',
};

// Tema para o modo claro
export const lightTheme = {
  ...tokens,
  body: '#ffffff',
  surface: '#f8f9fa',
  text: '#212529',
  border: '#dee2e6',
  colors: {
    ...tokens.colors,
    primary: tokens.colors.primary,
    primaryHover: tokens.colors.primaryHover,
  },
};

// Tema para o modo escuro, sobrescrevendo as cores necessárias
export const darkTheme = {
  ...tokens,
  body: '#111827',
  surface: '#1f2937',
  text: '#e5e7eb',
  border: '#374151',
  colors: {
    ...tokens.colors,
    primary: '#3b82f6',
    primaryHover: '#1d4ed8',
  },
};