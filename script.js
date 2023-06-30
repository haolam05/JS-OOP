'use strict';

//////////////////////////////////////////////////
// constructor function
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.hi = function (person) {
  console.log('Hi ' + person.firstName);
  console.log(this);
}
const hao = new Person('Hao', 2001);
const cat = new Person('Cat', 2002);
console.log(hao, cat);
console.log(hao instanceof Person);
console.log(Person.hi(hao));

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
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Coding Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw, mercedes);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// ES6 Classes - use constructor function behind the scene
/** Class expression */
const PersonClass2 = class {
  // same as function expession
};

/** Class declaration */
class PersonClass {
  // same as function declaration
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  // Getters
  get age() {
    return 2023 - this.birthYear;
  }
  get fullName() {
    return this._fullName;
  }
  // Setters
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('NOT a full name!');
  }
  // Static methods
  static hey(person) {
    console.log(`Hey ${person.fullName}`);
    console.log(this);
  }
}
const huy = new PersonClass('Huy Lam', 2006);
console.log(huy);
console.log(huy.__proto__);
console.log(huy.__proto__ === PersonClass.prototype);
console.log(huy.calcAge());
PersonClass.prototype.greet = function () {
  console.log(`Hey, ${this.fullName}!`);
};
huy.greet();
console.log(huy.age);
console.log(huy.fullName);
console.log(PersonClass.hey(huy));
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
