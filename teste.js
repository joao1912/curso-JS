function somar() {
    let soma = 0
    console.log(arguments.length)
    for(let c = 0 ; c < arguments.length ; c++) {
        soma += arguments[c]
    }
    return soma
}



console.log(somar(1,2,3))