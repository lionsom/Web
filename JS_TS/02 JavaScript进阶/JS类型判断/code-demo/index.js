console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof []); // "object"
console.log(typeof {}); // "object"
console.log(typeof function(){}); // "function"
console.log(typeof new Function()); // "function"
console.log(typeof new Date()); // "object"
console.log(typeof new RegExp()); // "object"
console.log(typeof Symbol()); // "symbol"



console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true

function Person() {}
console.log(new Person() instanceof Person); // true

console.log([] instanceof Object); // true
console.log(new Date() instanceof Object); // true
console.log(new Person instanceof Object); // true



// ****************************** //
const person1 = {
  name: 'Alice',
  age: 30
};

console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('gender')); // false



// ****************************** //
const person2 = {
  name: 'Alice',
  age: 30
};

console.log('name' in person2); // true
console.log('gender' in person2); // false