var teste = 5;
console.log(this)
console.log(this.teste)

let pessoa = {
    nome:"Lucas",
    idade:20,
    altura:1.78,
    frase: function(){
        return "O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim terás o que colher. "
    }
}
