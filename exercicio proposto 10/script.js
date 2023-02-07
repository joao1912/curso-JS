(function(){
    'use strict';

    const botaoSubmit = document.getElementById("botaoEnviar")
    const checkboxPreSubmit = document.getElementById("validacao")

    checkboxPreSubmit.addEventListener("click",function(){
        if(this.checked) {
            botaoSubmit.disabled = false
        } else {
            botaoSubmit.disabled = true
        }
    })

    const txt = document.getElementById("title")

    botaoSubmit.addEventListener("click", function(event) {
        if(!txt.value) {
            alert("Preencha os dados do formulario")
            event.preventDefault()
            checkboxPreSubmit.checked = false
            txt.focus()
        }
    })

    const txtDescricao = document.getElementById("txtarea")
    const contador = document.getElementById("contador")
    const txtContador = contador.firstElementChild
    const caracMaxima = txtDescricao.maxLength
    
    contador.removeAttribute("style")

    txtDescricao.addEventListener("input",function() {
        let letrasDigitadas = this.value.length
        let letrasSubtraidas = caracMaxima - Number(letrasDigitadas)
        txtContador.textContent = letrasSubtraidas
    })

})()