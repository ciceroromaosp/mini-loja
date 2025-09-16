/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          hover: '#0056b3',
          dark: '#3b82f6',
          'dark-hover': '#1d4ed8'
        },
        surface: {
          light: '#f8f9fa',
          dark: '#1f2937'
        },
        background: {
          light: '#ffffff',
          dark: '#111827'
        },
        text: {
          light: '#212529',
          dark: '#e5e7eb'
        },
        border: {
          light: '#dee2e6',
          dark: '#374151'
        },
        tag: {
          new: '#28a745',
          promo: '#dc3545'
        },
        star: '#ffc107',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}