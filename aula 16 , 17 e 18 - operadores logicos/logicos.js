/*parte de AND &&*/
var usuario = "Lucas"
var senha = 1233

if(usuario == "Lucas" && senha == 1234){
    console.log(`Usuário e Senha estão corretos, seja bem-vindo!`)
}else if(usuario != "Lucas"){
    console.log(`Usuário incorreto, por favor tente novamente`)
}else{
    console.log(`Senha incorreta, por favor tente novamente`)
}


/* parte de OU ||*/

var caneta = "azul"
var lapis = "cinza"

var canetares ="amarela"
var lapisres = "cinza"

if(caneta == canetares || lapis == lapisres){
    console.log(`Obrigado`)
}else{
    console.log(`Por favor pode me emprestar a caneta ${canetares} ou o lápis ${lapisres}`)
}

/*Parte de NOT !*/

if(!false){
    console.log(`Passou`)
}

var nome = "Lucas"

if(!(nome == "João")){
    console.log(`OK`)
}