let advogado = {
    nome: "Victor",
    horasTrabalhadas: 200,
    valorHora: 50,
    calcularGanho: function(){
      return this.horasTrabalhadas * this.valorHora
    }
}

let ganho = advogado.calcularGanho()
alert(ganho)