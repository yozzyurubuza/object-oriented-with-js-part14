'use strict';

// Object.create
// No prototype properties involved
// No constructor function and no new operator
// Manually set prototype to any object

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  //Similar to constructor function
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
