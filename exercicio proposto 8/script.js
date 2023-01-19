(function(){
    let mediasAlunos = document.querySelectorAll(".textMedia")
    let notasAlunos = document.querySelectorAll('.nota')
    let notasAlunos_ = []
    let medias = []
    for(let c = 0 ; c < notasAlunos.length ; c++) {
        notasAlunos_.push(Number(notasAlunos[c].textContent))
    }


    const soma = function(){
        let notas = []
        let tot = 0
        notas = notasAlunos_.splice(0,4)
        for(let nota of notas) {
            
            tot += nota
        }
        return tot
    }

    function avarege(cb) {
        if(typeof cb != "function") {
            throw Error("cb is not a function")
        }
        let soma = 0
        for(let c = 0 ; c < 10 ; c++){
            soma = cb()
            return soma / 4
        }
        
    }
    for(let c = 0 ; c < 10 ; c++) {
        medias.push(avarege(soma).toFixed(1))
        mediasAlunos[c].textContent = medias[c]
    }
})()