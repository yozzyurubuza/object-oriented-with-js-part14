'use strict';

// Static Methods

// They are not inherited and sometimes acts as a helper function about a class or about a constructor

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//Create object programatically using a function constructor
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); //To verify that jonas is an instance

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey(); //Not inherited
// jonas.hey(); //Not in the prototype

/////////////////////////////////////////////////////////

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //Methods - will be added to .prototype (Prototypal Inheritance)
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  //Similar Implementation
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  //Getters and Setters are useful for data validation
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  //Returns value to fullName, which was not available after changing the variable name in the setter
  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();
const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

console.log(Array.from(document.querySelectorAll('h1')));
// console.log([1,2,3].from());
//Error - because from method is attached to the entire constructor, not to the prototype method, so all the arrays do not inherit the from() method.

console.log(Number.parseFloat(12)); // Another static method, not available to all numbers
