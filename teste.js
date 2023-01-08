const pessoas = [{
    nome: "beto", idade: 30
}, {
    nome: "Barbara", idade: 22
}, {
    nome: "joao", idade: 18
}, {
    nome: "nilson", idade: 48
}]

for(let c = 0 ; c < pessoas.length ; c++) {
    console.log(`O funcionario ${pessoas[c].nome} tem ${pessoas[c].idade} de idade.`)
}