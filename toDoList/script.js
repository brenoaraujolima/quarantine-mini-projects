body = document.getElementsByTagName("body")[0];
addButton = document.querySelector(".addButton");
entrada = document.querySelector(".entrada");

class Tarefa {
    constructor(novaTarefa) {
        this.criarItem(novaTarefa);
    }

    criarItem(novaTarefa) {
        let entrada = document.createElement("input");
        entrada.disabled = true;
        entrada.classList.add("saida");
        entrada.value = novaTarefa;
        entrada.type = "text";

        let caixa = document.createElement("div");
        caixa.classList.add("container2");

        let editar = document.createElement("button");
        editar.innerHTML = "EDIT";
        editar.classList.add("botoes");
        editar.setAttribute("id", "edit");

        let remover = document.createElement("button");
        remover.innerHTML = "REMOVE";
        remover.classList.add("botoes");
        remover.setAttribute("id", "remove");

        body.appendChild(caixa);
        caixa.appendChild(entrada);
        caixa.appendChild(editar);
        caixa.appendChild(remover);

        editar.addEventListener("click", ()=>this.editar(entrada));
        remover.addEventListener("click", ()=>this.remover(caixa));
    }
    editar(input) {
        input.disabled = !input.disabled;
    }

    remover(caixa) {
        body.removeChild(caixa);
    }
}

function checar() {
    if(entrada.value != "") {
        new Tarefa(entrada.value);
        entrada.value = "";
    }
}

addButton.addEventListener("click", checar);