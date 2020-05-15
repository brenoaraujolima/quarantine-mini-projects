let numerosOperadores = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let ce = document.getElementById("ce");
let conteudo = "";

adicionarEventos();

function adicionarEventos() {
    numeros();
    apagarTudo();
}

function numeros() {
    numerosOperadores.forEach( elemento => {
        elemento.addEventListener("click", () => {
            conteudo = conteudo + elemento.innerHTML;
            display.setAttribute("value", conteudo);
        });
    });
}

function apagarTudo() {
    ce.addEventListener("click", () => {
        conteudo = "";
        display.setAttribute("value", "");
    })
}