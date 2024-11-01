let nome = "Infnet"
let ano = 1994
let nomeDiretor = "joão"
let numeroAlunos = 500
let telefone = 999999999

let colegio = {
    nome,
    ano,
    nomeDiretor,
    numeroAlunos,
    telefone,
    obterDiretor: function(){
        alert(this.nomeDiretor)
    }
}

delete colegio.ano