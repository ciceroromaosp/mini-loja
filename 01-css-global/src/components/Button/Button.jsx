import React from 'react';

export function Button({ children, variant = 'solid', ...props }) {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
}