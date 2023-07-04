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