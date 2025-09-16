import React from 'react';

export function Button({ children, variant = 'solid', disabled = false, ...props }) {
  
  const baseClasses = "px-4 py-2 rounded font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark";

  const variants = {
    solid: 'bg-primary hover:bg-primary-hover text-background-light dark:bg-primary-dark dark:hover:bg-primary-dark-hover',
    outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-background-light dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-background-light',
    ghost: 'bg-transparent text-primary hover:bg-primary/10 dark:text-primary-dark dark:hover:bg-primary-dark/10',
  };

  const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${disabledClasses}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}