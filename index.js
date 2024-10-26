const elementosDuvidas = document.querySelectorAll('.duvida');

elementosDuvidas.forEach((duvida) => {
  duvida.addEventListener('click', () => {
    duvida.classList.toggle('ativa');
  });
});