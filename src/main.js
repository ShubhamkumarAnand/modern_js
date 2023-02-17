// null
const aptNumber = null
console.log(aptNumber, typeof aptNumber)

// undefined
let minSal;
console.log(minSal, typeof minSal)

const maxSal = undefined
console.log(maxSal, typeof maxSal)

// symbol
const symbol = Symbol('int')
console.log(symbol, typeof symbol)

// Reference type
const arr = [1,2,3,4]
console.log(arr, typeof arr)

const person = {
  name: 'John',
  age: 21
}

console.log(person, typeof person)

function sayHello() {
  console.log('Hello')
}
console.log(sayHello, typeof sayHello)
