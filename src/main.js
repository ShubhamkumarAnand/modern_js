// String

const s = new String("imskanand How are you?");
let x = s.__proto__;

x = s.includes('Hello')
x = s.substring(1, 4)
x = s.slice(-1)
x = s.valueOf()
x = s.split(' ')
console.log(x)

// challenge

let myRole = 'developer'
myRole = myRole.charAt(0).toUpperCase() + myRole.substring(1)
myRole = myRole.charAt(0).toUpperCase() + myRole.slice(1,myRole.length)
console.log(myRole)
