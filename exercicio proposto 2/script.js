"use strict"
let numero1 = prompt("digite o primeiro numero")
let numero2 = prompt("digite o segundo numero")

document.getElementById("resposta").innerHTML = `<p>${calculador(numero1,numero2)}</p>`
function calculador(v1 = 0,v2 = 0) {
    if(v1 * 0 != 0 || v2 * 0 != 0) {
        alert("erro")
        return "erro"
    } else {
        let valor1 = Number(v1)
        let valor2 = Number(v2)
        let media = (valor1 + valor2) / 2
        return media
    }
}

