for(var i = 10; i > 0;i--){
    console.log(i)
    if(i === 5){
        break
    }
}
console.log(`Deu O break`)

var x = 10

while(x<100){
    x+=10

    if(x === 60){
        console.log(`pular`)
        continue
    }
    console.log(`Teste de continue ${x}`)
}

var y = 0 

while(y<18){
    y+= 1
    if(y === 8 || y === 13){
        console.log(`Não temos 8 e nem 13`)
        continue
    }
    console.log(y)
}