'use strict';

// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
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

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

//extends link PersonCl (parent) to StudentCl (child)
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //No need to do PersonCl.call
    //Always needs to happen first! Cannot access this without super
    super(fullName, birthYear); // Pass arguments from parent class
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// Even without constructor, this will work
// const martha = new StudentCl('Martha Jones', 2012);

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//Can be problematic and dangerous in the real world
