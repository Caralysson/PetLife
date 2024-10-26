
 var elementosDuvidas = document.querySelectorAll('.duvida')

elementosDuvidas.forEach (function (duvida) {
   duvida.addEventListener ('click', function () {
     elementosDuvidas.forEach(function (item) {
      item.classList.remove('ativa');
     })
})
})

//function nome(argumento) {}
