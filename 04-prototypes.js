'use strict';

//Constructor Functions and new Operator

//Constructor function = Capital first letter
const Person = function (firstName, birthYear) {
  //Set properties to the object - use same name as the parameters for conventional purpose
  // Instance properties - will be available on all instance created
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function
  //   this.calcAge = function(){
  //       console.log(2037 - this.birthYear);
  //   }
};

//Constructor function always has "new" keyword
//jonas is an instance of a person, same goes with matilda and jack
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {} // Object no longer needs to be empty

//Create object programatically using a function constructor
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); //To verify that jonas is an instance

// Prototypes

// Each and every function in JS has a property called prototype
// All the objects that are created by this function will have access to all methods and properties (inherit) defined in this prototype property
console.log(Person.prototype);

//Only one copy of this function exist
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//jonas has now calcAge function even though it does not contain calcAge method
//Prototypal Inheritance
jonas.calcAge();
matilda.calcAge();

//__proto__ property connects the object to Person.prototype
console.log(jonas.__proto__); // To see prototype
console.log(jonas.__proto__ === Person.prototype);
//Person.prototype is the prototype of jonas
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
//Person is not the prototype of Person.prototype
//Think of prototype property as prototype of linked objects property
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); // species is not inside of jonas object, just inherited from the prototype
