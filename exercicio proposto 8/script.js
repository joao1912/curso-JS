(function(){
    let mediasAlunos = document.querySelectorAll("textMedia")
    let notasAlunos = document.querySelectorAll('.nota')
    notasAlunos = Array.from(notasAlunos)
    let medias = []
    let cont = 0



    const soma = function(nota){
        if(cont === 5) {
            return
        }
        cont++ 
        return nota

    }

    function avarege(cb) {
        if(typeof cb != "function") {
            throw Error("cb is not a function")
        }
        let soma = 0
        for(let nota of notasAlunos){
            soma += cb(nota)
            if(cont === 5) {
                cont = 0
                return soma / 4
            }
        }
        
    }
    for(let c = 0 ; c < 10 ; c++) {
        medias.push(avarege(soma))
    }
    console.log(medias)
})()