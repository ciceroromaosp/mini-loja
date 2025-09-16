# Versão 01: CSS Global

Esta versão da Mini Loja foi construída utilizando uma abordagem de **CSS Global**.

## Características da Abordagem

-   **Arquivo Único**: Toda a estilização principal, incluindo tokens de design (variáveis CSS), resets e layout, está centralizada em `src/index.css`.
-   **Componentes com CSS Próprio**: Cada componente (ex: `Button`, `ProductCard`) importa seu próprio arquivo CSS (`Button.css`, `ProductCard.css`). Embora os arquivos sejam separados, todas as classes são globais e podem colidir.
-   **Variáveis CSS (Tokens)**: O tema (claro/escuro) e a consistência do design são gerenciados por variáveis CSS definidas no `:root` e sobrescritas em `html.dark`.
-   **Simplicidade**: É uma abordagem direta e fácil de entender para projetos pequenos.