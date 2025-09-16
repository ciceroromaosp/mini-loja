# Versão 03: Tailwind CSS

Esta versão da Mini Loja foi construída utilizando o framework **Tailwind CSS**.

## Características da Abordagem

-   **Utility-First**: A estilização é feita compondo classes de utilidade diretamente no JSX. Não foram escritos arquivos CSS para os componentes.
-   **Configuração Centralizada**: O design system (tokens de cores, espaçamentos, fontes) é definido no arquivo `tailwind.config.js`. Isso garante consistência em toda a aplicação.
-   **Dark Mode Integrado**: O tema escuro é gerenciado pelo próprio Tailwind através de variantes `dark:`, que são ativadas quando a classe `dark` está presente no elemento `<html>`.
-   **Desenvolvimento Rápido**: Permite construir e prototipar interfaces rapidamente sem sair do arquivo do componente.
-   **CSS Otimizado**: O processo de build remove todas as classes não utilizadas, resultando em um arquivo CSS final extremamente pequeno.

## Para Rodar

1.  Navegue até esta pasta no terminal.
2.  Execute `npm install` para instalar as dependências.
3.  Execute `npm run dev` para iniciar o servidor de desenvolvimento.