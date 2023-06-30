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
};
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

//////////////////////////////////////////////////
// Object.create
const PersonPrototype = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  calcAge() {
    console.log(2023 - this.birthYear);
  },
};
const lam = Object.create(PersonPrototype);
lam.init('Lam', 2001);
console.log(lam.__proto__ === PersonPrototype);
console.log(lam);
console.log(lam.__proto__);
console.log(lam.__proto__.__proto__);
console.log(lam.__proto__.__proto__.__proto__);
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Coding Challenge #2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford.speed);
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Inheritance Between Classes
// 1. constructor function
const Person_ = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person_.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person_.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
  console.log(`I'm ${this.firstName} and I study ${this.course}.`);
};

const den = new Student('Dong', 1991, 'CS');
den.calcAge();
den.introduce();

// 2. ES6 classes
class StudentClass extends Person_ {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`I'm ${this.firstName} and I study ${this.course}.`);
  }
  calcAge() {
    console.log(`I was borned in ${this.birthYear}. How old am I?`);
  }
}
const dong = new StudentClass('Dong', 1991, 'CS');
console.log(dong);
dong.calcAge();
dong.introduce();
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Coding Challenge #3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargTo) {
  this.charge = chargTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
console.dir(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
