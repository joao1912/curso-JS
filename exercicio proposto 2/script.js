"use strict"

console.log(calculador(2,6))

function calculador() {
    let soma = 0
    for (let c = 0 ; c < arguments.length ; c++){
        soma += arguments[c]
    }
    if(typeof soma != "number") {
        return "erro"
    } else {
        return soma / arguments.length
    }
}

