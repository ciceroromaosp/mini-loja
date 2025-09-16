// 1. Importa o CSS como um objeto 'styles'
import styles from './Button.module.css';

export function Button({ children, variant = 'solid', disabled = false, ...props }) {
  // 2. Mapeia a prop 'variant' para a classe correspondente no objeto 'styles'
  const variantClass = `btn-${variant}`; // ex: 'btn-solid'
  const finalClassName = `${styles.btn} ${styles[variantClass]}`;

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}