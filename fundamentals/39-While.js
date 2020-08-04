function getInteiroAleatorio(min, max) {
    return Math.random() * (max-min) + min
}

let opcao = 1
while(opcao) {
    opcao = getInteiroAleatorio(-1,10)
    console.log(opcao)
    opcao = 0
}