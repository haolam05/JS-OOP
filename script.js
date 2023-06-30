'use strict';

// constructor function
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const hao = new Person('Hao', 2001);
const cat = new Person('Cat', 2002);
console.log(hao, cat);
console.log(hao instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
hao.calcAge();
cat.calcAge();
console.log(hao);
console.log(hao.__proto__);
console.log(hao.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(hao));
console.log(Person.prototype.isPrototypeOf(cat));
console.log(Person.prototype.isPrototypeOf(Person));
Person.prototype.species = 'Homo Sapiens';
console.log(hao.species, cat.species);
console.log(hao.hasOwnProperty('birthYear'));
console.log(hao.hasOwnProperty('species'));
console.log(hao.__proto__);
console.log(hao.__proto__.__proto__);
console.log(hao.__proto__.__proto__.__proto__);
// Array
const arr = [1, 2, 3, 4, 1, 2, 3, 4, 5]; // new Array === []
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
console.log((x => x + 1).__proto__ === Function.prototype);
