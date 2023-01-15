const numeros = [1,4,8,4,7,4,7,2,4,7,1]

const numerosUnicos = numeros.reduce(function(numeros,numeroAtual){
    
    if(!numeros.includes(numeroAtual)){
        numeros.push(numeroAtual)
    }
    return numeros
},[])

console.log(numerosUnicos)