
 var elementosDuvidas = document.querySelectorAll('.duvida')

elementosDuvidas.forEach (function (duvida) {
   duvida.addEventListener ('click', function () {
     elementosDuvidas.forEach(function (item) {
      item.classList.remove('ativa');
     });
     duvida.classList.toggle('ativa');
  })
})

//function nome(argumento) {}
// teste isso aqui rapaz =========================
// =========================================
// ===============================================
