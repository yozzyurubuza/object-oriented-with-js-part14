'use strict';

// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //Refactoring
  this.course = course;
};

//Important to do the inheritance in this part
// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype; // Will not produce inheritance

//Add methods after inheritance
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge(); //JS will find the calcAge method in the parent class

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); //Also true because of linking
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student; // To correct constructor name
console.dir(Student.prototype.constructor);
