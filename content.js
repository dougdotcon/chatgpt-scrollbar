// Aguarda o carregamento do DOM
function addScrollbar() {
  // Seleciona o container central da página (área dos projetos) de forma mais flexível
  const mainContainer = document.querySelector('[role="presentation"].composer-parent');
  if (mainContainer) {
    mainContainer.style.overflowY = 'auto';
    mainContainer.style.maxHeight = '80vh'; // Ajuste conforme necessário
    mainContainer.style.scrollbarWidth = 'auto'; // Firefox
    mainContainer.style.scrollbarColor = '#888 #f1f1f1'; // Firefox
  }
}

// Executa ao carregar e ao mudar de rota (SPA)
addScrollbar();

// Observa mudanças no DOM para reaplicar se necessário
const observer = new MutationObserver(addScrollbar);
observer.observe(document.body, { childList: true, subtree: true });

// (Opcional) Adiciona estilo para personalizar a barra de rolagem no Chrome
const style = document.createElement('style');
style.textContent = `
  [role="presentation"].composer-parent::-webkit-scrollbar {
    width: 8px;
  }
  [role="presentation"].composer-parent::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  [role="presentation"].composer-parent::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
document.head.appendChild(style); 