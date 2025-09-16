# Versão 04: styled-components

Esta versão da Mini Loja foi construída utilizando a biblioteca **styled-components**, uma popular abordagem de CSS-in-JS.

## Características da Abordagem

-   **CSS-in-JS**: Os estilos são escritos em JavaScript, dentro dos arquivos dos componentes, usando *template literals*. Isso permite criar componentes que já vêm com seu próprio estilo encapsulado.
-   **ThemeProvider**: Um sistema de tema centralizado foi criado em `src/styles/theme.js`. O `ThemeProvider` injeta os tokens de design (cores, espaçamentos, etc.) em todos os componentes, permitindo consistência e fácil manutenção do tema (claro/escuro).
-   **Estilo Dinâmico**: Os estilos podem ser alterados dinamicamente com base nas props passadas para os componentes, como pode ser visto nas variantes do `Button` e na `Tag` do `ProductCard`.
-   **Escopo Automático**: `styled-components` garante que os estilos de um componente não vazem para afetar outros, eliminando a necessidade de convenções como BEM ou CSS Modules.

## Para Rodar

1.  Navegue até esta pasta no terminal.
2.  Execute `npm install` para instalar as dependências.
3.  Execute `npm run dev` para iniciar o servidor de desenvolvimento.