// lenght
var arr = [1,2,3,4,5]
console.log(arr.length)

//push

arr.push(6)

console.log(`${arr}`)

//pop

arr.pop()

console.log(`${arr}`)

//unshift

arr.unshift(0)

console.log(`${arr}`)

//shift
arr.shift()
console.log(`${arr}`)


// isarray

console.log(Array.isArray(arr))


// splice

arr.splice(2 , 0 ,999, 76)

console.log(`${arr}`)

arr.splice(4,1)
console.log(`${arr}`)


//indexof

console.log(arr.indexOf(5))

//join

var frase = ["aprendendo", "mais" , "sobre", "JavaScript"]

console.log(frase.join(" "))

//reverse

console.log(frase.reverse())