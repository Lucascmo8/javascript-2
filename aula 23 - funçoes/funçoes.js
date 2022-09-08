function primeiraFunção(){
    console.log(`Hello world das functions`)
}

primeiraFunção()


function dizerNome(nome){
    console.log(`O nome é: ${nome}`)
}

var aluno_1 = "Valdisnei"
dizerNome("Lucas")
dizerNome("Flamengo")
dizerNome(aluno_1)

function soma( a=0, b=0){
    var soma = a + b
    return soma
}

var soma_1 = soma(4 , 7)
console.log(soma_1)
console.log(soma(8,7))
console.log(soma(8))