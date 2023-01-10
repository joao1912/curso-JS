
let BotaoMostrar = document.getElementById("mostrar")
let BotaoLimpar = document.getElementById("limpar")
let tela = document.getElementById("telaTabuada")

BotaoMostrar.addEventListener('click', function calcularT() {
    for(let a = 1 ; a < 11 ; a++) {
        tela.innerHTML += "<br>"
        for(let c = 1 ; c < 11 ; c++) {
            tela.innerHTML += `${a}X${c}= ${soma(a,c)} <br>`
        }
    }
})

BotaoLimpar.addEventListener("click",function(){
    tela.innerHTML = ""
})

function soma(n1,n2) {
    return n1 * n2
}
