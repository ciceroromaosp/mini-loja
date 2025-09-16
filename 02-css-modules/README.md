# Versão 02: CSS Modules

Esta versão da Mini Loja foi construída utilizando **CSS Modules**.

## Características da Abordagem

-   **Estilos Escopados**: Cada componente importa seu próprio arquivo `.module.css`. O processo de build renomeia as classes para garantir que sejam únicas em toda a aplicação (ex: `.title` se torna `ProductCard_title__Xyz12`), eliminando o risco de conflitos de CSS.
-   **Manutenção Simplificada**: Como os estilos são locais, é seguro adicionar, modificar ou remover classes em um componente sem se preocupar com efeitos colaterais em outras partes do site.
-   **Estilos Globais Explícitos**: Estilos que precisam ser globais (como tokens, resets e layouts principais) são mantidos em um arquivo CSS separado (`index.css`) que não usa a convenção `.module.css`.
-   **Melhor Organização**: Promove uma estrutura onde estilos estão diretamente associados aos seus componentes, facilitando a localização e o gerenciamento do código.