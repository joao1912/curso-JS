

(function() {
    let emailCadastrado = document.getElementById("cadastroEmail")
    document.getElementById("botaoCadastrar").addEventListener("click",function(){
        let p = document.getElementsByTagName("p")[0]
        p.innerHTML = `O email <b>${emailCadastrado.value}</b> foi cadastrado com sucesso!!!`
        emailCadastrado.setAttribute("disabled","disabled")
        document.getElementById("edit").style.display = "inline-block"
        document.getElementById("botaoCadastrar").setAttribute("disabled","disabled")
        document.getElementById("botaoCadastrar").style.cursor = "default"
    })

    document.getElementById("edit").addEventListener("click",function(){
        emailCadastrado.removeAttribute("disabled","disabled")
        document.getElementById("botaoCadastrar").removeAttribute("disabled","disabled")
        document.getElementById("edit").style.display = "none"
        document.getElementsByTagName("p")[0].textContent = ""
        emailCadastrado.value = ""
        emailCadastrado.focus()
        document.getElementById("botaoCadastrar").style.cursor = "pointer"
    })
})()