# ChatGPT Scrollbar Fix

Uma extensão de navegador projetada para restaurar e personalizar a funcionalidade de barra de rolagem na interface web do ChatGPT. Ela garante uma navegação consistente e uma melhor usabilidade, injetando uma barra de rolagem persistente e moderna no container de conteúdo principal.

## Recursos

- **Restauração de Visibilidade**: Insere uma barra de rolagem vertical funcional no container principal do ChatGPT, onde a rolagem nativa frequentemente é oculta ou inconsistente.
- **Estilização Moderna**: Aplica um visual limpo e personalizado à barra de rolagem para combinar com a estética da interface do ChatGPT.
- **Gerenciamento Dinâmico de DOM**: Utiliza um `MutationObserver` para detectar mudanças no DOM e manter a funcionalidade da barra de rolagem ao navegar entre diferentes conversas ou visualizações.
- **Leve**: Opera localmente dentro do navegador sem coletar dados do usuário ou se comunicar com servidores externos.

## Instalação

Para instalar esta extensão manualmente no Chrome (ou navegadores baseados em Chromium):

1. Clone ou baixe este repositório para sua máquina local.
2. Abra o Chrome e navegue até `chrome://extensions/`.
3. Ative o **Modo desenvolvedor** no canto superior direito.
4. Clique em **Carregar sem empacotamento**.
5. Selecione a pasta raiz deste projeto.

## Detalhes Técnicos

A extensão funciona injetando um Script de Conteúdo em `https://chatgpt.com/`. Este script:

1. Identifica o elemento DOM específico utilizado para o container da conversa principal.
2. Injeta regras CSS para sobrescrever as propriedades de `overflow` existentes e estilizar as trilhas e alças da barra de rolagem.
3. Inicializa um `MutationObserver` para observar mudanças na estrutura do DOM (como alterações de rota ou carregamento de novas mensagens) para reaplicar os estilos se o container for re-renderizado.

## Licença

Licença MIT. Sinta-se livre para usar e modificar conforme necessário.