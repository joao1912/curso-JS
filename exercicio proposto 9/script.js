
//Mova a última li de orignal para alvo (mas antes da primeira li). 
//Em outras palavras, a última li da original deve virar a primeira li de alvo

//altere o texto da primeira li de .alvo para "item 0"

//clone a ul de .original e a inclua na primeira li de .alvo

//remova a ultima li (item2) da lista inserida na etapa anterior

//remova as duas li's que sobraram na ul original

;(function(){
    let elemento_lista = document.createElement("li")
    elemento_lista.textContent = "item 2"
    document.querySelector(".alvo").firstElementChild.nextElementSibling.after(elemento_lista)

    let li_original = document.querySelector(".original").firstElementChild.nextElementSibling.lastElementChild
    let li_alvo = document.querySelector(".alvo").firstElementChild.nextElementSibling.firstElementChild
    let li_clone = li_original.cloneNode(true)
    li_alvo.remove()
    document.querySelector(".alvo").firstElementChild.nextElementSibling.insertAdjacentElement("beforebegin",li_clone)

    console.log(document.querySelector("ul.lista"))
})()