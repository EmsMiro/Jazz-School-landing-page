const buttons = document.querySelectorAll('.hover-button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    // Adicione o estilo desejado quando o mouse estiver sobre o botão
    button.style.backgroundColor = 'color';
    button.style.color = 'color';
  });

  button.addEventListener('mouseout', () => {
    // Restaure o estilo original quando o mouse sair do botão
    button.style.backgroundColor = '';
    button.style.color = '';
  });
})

// Obtém todos os elementos com a classe 'card'
const cards = document.querySelectorAll('.card');

// Adiciona o evento de 'mouseenter' para cada card
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('card-hover');
  });

  // Adiciona o evento de 'mouseleave' para cada card
  card.addEventListener('mouseleave', () => {
    card.classList.remove('card-hover');
  });
});

// Adicionando animação aos links do nav no header
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('active');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('active');
  });
});
