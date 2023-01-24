let title = document.createElement("h1")
let atributo = document.createAttribute("class")
atributo.value = "azul"

title.setAttributeNode(atributo)
title.textContent = "isso é um titulo?"
console.log(title) 
