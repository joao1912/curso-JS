

//remova a ultima li (item2) da lista inserida na etapa anterior

//remova as duas li's que sobraram na ul original

;(function(){
    let elemento_lista = document.createElement("li")
    elemento_lista.textContent = "item 2"
    let lista = document.querySelector(".alvo").firstElementChild.nextElementSibling
    
    lista.insertAdjacentElement("afterbegin", document.querySelector(".original").firstElementChild.nextElementSibling.lastElementChild)
    document.querySelector(".alvo").firstElementChild.nextElementSibling.firstElementChild.textContent = "item 0"
    let clone_ul = document.querySelector(".original").firstElementChild.nextElementSibling.cloneNode(true)
    console.log(clone_ul)
    lista.insertAdjacentElement("beforeend",clone_ul)
    lista.lastElementChild.lastElementChild.remove()
    lista.lastElementChild.lastElementChild.textContent = "item 2"

    document.querySelector(".original").firstElementChild.nextElementSibling.firstElementChild.remove()
    document.querySelector(".original").firstElementChild.nextElementSibling.firstElementChild.remove()
})()