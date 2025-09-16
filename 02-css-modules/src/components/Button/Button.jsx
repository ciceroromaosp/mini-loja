import React from 'react';
import styles from './Button.module.css';

export function Button({ children, variant = 'solid', ...props }) {
  const variantClass = styles[variant]; 
  return (
    <button className={`${styles.btn} ${variantClass}`} {...props}>
      {children}
    </button>
  );
}