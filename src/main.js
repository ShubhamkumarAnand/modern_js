// Primitive Data Types Stored on the Stack
// Non-Primitive Data Types Stored on the Heap with the reference to the stack

const person = {
  name: 'John',
  email: 'john@example.com'
}

console.log(person)
const person2 = person

person2.name = 'John Smith'
console.log(person2)
console.log(person)
