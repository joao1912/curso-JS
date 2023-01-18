(function(){
    let notasAlunos = Array.from(document.querySelectorAll('nota'))
    let medias = []
    let cont = 0
    const soma = function(){
        let somaNotas = 0
        cont++
        
    }

    function avarege(cb) {
        if(typeof cb != "function") {
            throw Error("cb is not a function")
        }
        let soma = 0
        for(let nota of notasAlunos){
            soma = cb()
            return soma / 4
        }
    }

    
    console.log()
})()