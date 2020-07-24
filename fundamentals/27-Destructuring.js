const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

/* Tire do objeto pessoa
*   o nome e a idade
*/
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n, i)

const {endereco: {logradouro:l, numero:n1, cep:c}} = pessoa
console.log(l, n1, c)