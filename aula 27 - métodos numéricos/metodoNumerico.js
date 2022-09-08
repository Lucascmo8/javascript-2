// parseFloat

var n1 = "25.98"
var n2 = "34"

var n1_ = parseFloat(n1)
var n2_ = parseFloat(n2)

console.log(n1)
console.log(typeof(n1))
console.log(typeof(n1_))

console.log(n2)
console.log(typeof(n2))
console.log(typeof(n2_))


// parseInt

var n3 = "87.19"

var n3_ = parseInt(n3)


console.log(n3)
console.log(typeof(n3))
console.log(typeof(n3_))
console.log(n3_)


// tofixed

var n4 = 23.766765
var n4_ = n4.toFixed(2)

console.log(n4)
console.log(typeof(n4))
console.log(typeof(n4_))
console.log(n4_)

// isNaN

var n5 = "54"
var n5_ = isNaN(n5)

console.log(n5)
console.log(typeof(n5))
console.log(typeof(n5_))
console.log(n5_)

// max_value e Min_value

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)