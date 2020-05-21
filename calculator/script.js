let numerosOperadores = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let ce = document.getElementById("ce");
let apagar = document.getElementById("delete");
let igual = document.getElementById("equal");
let conteudo = "";

adicionarEventos();

function adicionarEventos() {
    numeros();
    apagarTudo();
    backspace();
    calcular();
}

function numeros() {
    numerosOperadores.forEach( elemento => {
        elemento.addEventListener("click", () => {
            conteudo = conteudo.concat(elemento.innerHTML);
            display.setAttribute("value", conteudo);

        });
    });
}

function apagarTudo() {
    ce.addEventListener("click", () => {
        conteudo = "";
        display.setAttribute("value", "0");
    })
}

function backspace() {
    apagar.addEventListener("click", () => {
        conteudo = conteudo.slice(0, conteudo.length-1);
        display.setAttribute("value", conteudo);
    });
}

function calcular() {
    igual.addEventListener("click", () => {
        conteudo = eval(conteudo);
        display.setAttribute("value", conteudo);
    });
}