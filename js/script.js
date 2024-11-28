function navigateTo(page) {
  window.location.href = page;
}

// Seleciona todos os spans dentro do h1
const spans = document.querySelectorAll('.titulo-animado span');

// Adiciona um delay de animação para cada letra
spans.forEach((span, index) => {
  span.style.animationDelay = `${index * 0.1}s`;
});
