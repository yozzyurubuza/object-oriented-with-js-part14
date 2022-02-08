'use strict';

//ES6 Class Summary

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

//Student = Child Class
//extends = Inheritance between classes, automatically sets prototype
//PersonCL = Parent Class
class Student extends PersonCl {
  //Public Field - Available on created object
  university = 'University of Lisbon'; // Not unique to all obj
  //Private Field - Not accessible outside of class
  #studyHours = 0;
  #course;
  //Static public field - Available only on class
  static numSubjects = 10;

  //Constructor method - called by new operator
  //Can be omitted if we want to have the same parameters as the Parent Class
  constructor(fullName, birthYear, startYear, course) {
    //Call to parent (super) class
    super(fullName, birthYear);
    //Instance Property - based on the input data of the constructor
    this.startYear = startYear;

    this.#course = course;
  }

  //Public Method
  introduce() {
    console.log(`I study ${this.course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffe(); //Referencing private field and method
    this.#studyHours += h;
  }

  //Private method
  #makeCoffe() {
    return 'Here is a coffe for you 😄';
  }

  //Getter method - Get value out of an object
  get testScore() {
    return this._testScore;
  }

  //Setter method - use _ to set property with the same name as method, and also add getter
  set testScore(score) {
    this._testScore = score < 20 ? score : 0;
  }

  //Static method - Only available on class
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const student = new Student('Jonas Schmedtmann', 2020, 2037, 'Medicine');
