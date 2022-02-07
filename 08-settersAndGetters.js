'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = firstName;
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
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

const walter = new PersonCl('Walter White', 1965);

// Getters and Setters
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  // Read property, but need to do some calculations before
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //It is not mandatory to specify a setter when we have a getter for the same property
  set latest(mov) {
    //Has to have exactly one parameter
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50; // How to use setter
console.log(account.movements);
