(function(){
    document.querySelector("#validacao").addEventListener("click",function(){
        if(this.checked) {
            document.querySelector("#botaoEnviar").removeAttribute("disabled","disabled")
        } else {
            document.querySelector("#botaoEnviar").setAttribute("disabled","disabled")
        }
    })
})()