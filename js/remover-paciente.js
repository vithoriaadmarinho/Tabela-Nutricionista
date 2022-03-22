var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
});

// a mesma coisa do de cima:
// tabela.addEventListener("dblclick", function(event){
//     var alvoEvento = event.target;
//     var paiDoAlvo = alvoEvento.parentNode; //remove o TR =PACIENTE
//     paiDoAlvo.remove();
// });

