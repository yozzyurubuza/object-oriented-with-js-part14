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
