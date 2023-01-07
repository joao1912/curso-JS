const pessoa = {
    nome: "daniel",
    idade: 17,
    profissão: "medico",
}

for(let prop in pessoa) {
    console.log(pessoa[prop])
}