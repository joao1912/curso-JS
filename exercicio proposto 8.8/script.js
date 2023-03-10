const alunos = [
                { nome: "Daniel", notas: [10, 3, 7.5, 3] },
                { nome: "Maria", notas: [10, 9, 3, 9.5] },
                { nome: "João", notas: [10, 4.5, 1, 3.5] },
                { nome: "Joana", notas: [1, 3, 9, 1.5] },
                { nome: "José", notas: [10, 4.5, 7, 3] },
                { nome: "Arnaldo", notas: [10, 4.5, 7, 3] },
                { nome: "Lucas", notas: [4.5, 9, 8, 3] },
                { nome: "Luana", notas: [3, 7, 9, 3] },
                { nome: "Beatriz", notas: [10, 4, 7, 9] },
                { nome: "Sergio", notas: [4.5, 9.5, 10, 2] }
];

(function(){


    function avarage(notas) {
        let soma = 0
        for(let nota of notas) {
            soma += nota
        }
        return soma / 4
    }

    alunos.forEach(aluno => {
        aluno.media = avarage(aluno.notas).toFixed(1)
    })

    const html = alunos.map(aluno => `
        <tr>
            <td>${aluno.nome}</td>
            ${aluno.notas.map(n => `<td>${n}</td>`).join("")}
            <td class="${aluno.media > 6.9 ? "aprovado" : "reprovado"}">${aluno.media}</td>
        </tr>
    `).join("")

    document.querySelector('tbody').innerHTML = html


})()

/*
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
*/ 