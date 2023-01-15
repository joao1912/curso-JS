const nomes = ["Joao", "Roberta", "Carlos", "Cintia", "Jorge"]

let nomesEmOrdem = nomes.reduce(function(nomes,nomeAtual){
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
},{})

console.log(nomesEmOrdem)
