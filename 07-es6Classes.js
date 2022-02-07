'use strict';

// ES6 Classes

//Classes are just special type of functions
// Class Expression
// const PersonCl = class {}

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Methods - will be added to .prototype (Prototypal Inheritance)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //Similar Implementation
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted - cannot use before they are declared in the code
// 2. Classes are first-class citizens - can pass into functions and return them into functions
// 3. Classes are executed in strict mode
