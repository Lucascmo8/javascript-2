let pessoa = {
    nome:"Lucas",
    idade:20,
    altura:1.78,
    frase: function(){
        return "O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim terás o que colher. "
    },
    conta: function(a=0,b=0){
        return a + b
    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.frase())

console.log(pessoa.conta(34 + 35))