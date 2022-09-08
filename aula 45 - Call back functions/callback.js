function exibir (num){
    console.log(`A operação resultou em ${num}`)
}

function soma (a=0 , b=0,cb){
    var op = a + b
    cb(op)
}

function multiplicacao(a=0,b=0,cb){
    var op = a * b
    cb(op)
}
soma(2,4,exibir)
multiplicacao(2,5,exibir)