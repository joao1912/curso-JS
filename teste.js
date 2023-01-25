let title = document.createElement("h1")
let atributo = document.createAttribute("class")
atributo.value = "azul"

title.setAttributeNode(atributo)
title.textContent = "isso é um titulo"

let parag = document.querySelector("p")

let conteiner = document.getElementById("fundo")

let title2 = title.cloneNode(true)

console.log(title2)

conteiner.prepend(title2)
conteiner.append(title)

let elemento_novo = document.createElement("p")

elemento_novo.textContent = "isso é um lindo paragrafo de teste feito por joao pedro silva teixeira aprendendo programação"

conteiner.append(elemento_novo)
