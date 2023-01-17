(function(){
    const valoresParaSoma = [1,2,3]
    const valoresParaMedia = [1,2,3]

    function sum() {
        let tot = 0
        for(let n of arguments) {
            tot += n
        }
        return tot
    }

    function avarege() {
        let media = 0
        let soma = 0
        for(let n of arguments) {
            soma += n
        }
        return soma / arguments.length
    }

    console.log("soma dos valores:" + sum(...valoresParaSoma))
    console.log("média dos valores:" + avarege(...valoresParaMedia))
})()