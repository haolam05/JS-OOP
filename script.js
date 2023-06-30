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
