const alunos = [
                { nome: "Daniel", n1: 10, n2: 3, n3: 7.5, n4: 3 },
                { nome: "Maria", n1: 10, n2: 9, n3: 3, n4: 9.5 },
                { nome: "João", n1: 10, n2: 4.5, n3: 1, n4: 3.5 },
                { nome: "Joana", n1: 1, n2: 3, n3: 9, n4: 1.5 },
                { nome: "José", n1: 10, n2: 4.5, n3: 7, n4: 3 },
                { nome: "Arnaldo", n1: 10, n2: 4.5, n3: 7, n4: 3 },
                { nome: "Lucas", n1: 4.5, n2: 9, n3: 8, n4: 3 },
                { nome: "Luana", n1: 3, n2: 7, n3: 9, n4: 3 },
                { nome: "Beatriz", n1: 10, n2: 4, n3: 7, n4: 9 },
                { nome: "Sergio", n1: 4.5, n2: 9.5, n3: 10, n4: 2 }
];

    

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

    function avarege(cb,n1,n2,n3,n4) {
        if(typeof cb != "function") {

            let media = (n1 + n2 + n3 + n4) / 4
            return media
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


    alunos.forEach(aluno => {
        aluno.media = avarege(aluno.n1, aluno.n2, aluno.n3, aluno.n4)
    })

    const html = alunos.map(function(aluno){
        for(let c = 0 ; c < 10 ; c++) {
        `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.n1}</td>
            <td>${aluno.n2}</td>
            <td>${aluno.n3}</td>
            <td>${aluno.n4}</td>
            <td>${aluno.media}</td>
        </tr>
        `
        }
    }).join("")


})()