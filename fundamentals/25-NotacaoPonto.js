console.log(Math.ceil(1.4))

const obj1 = {}
obj1.nome = "Bola"
//obj1['nome'] = "Bola2"
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Executando...")
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()