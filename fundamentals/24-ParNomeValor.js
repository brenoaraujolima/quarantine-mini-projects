const saudacao = 'ola'

function exec() {
    const saudacao = 'Faaala'
    return saudacao
}

//Objetos sao grupos aninhados de chave-valor
const cliente = {
    nome: 'Pedro',
    idade: 22,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)