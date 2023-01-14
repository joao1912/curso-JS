(function() {
    let checkContrato = document.getElementById("contrato")
    let botaoCadastro = document.getElementById("cadastroB")
    checkContrato.addEventListener("click",function(){
        if(checkContrato.checked) {
            botaoCadastro.disabled = false
        } else {
            botaoCadastro.disabled = true
        }
    })
})()