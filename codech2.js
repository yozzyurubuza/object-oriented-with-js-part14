'use strict';

// 1. Re-create challenge 1, but this time, using ES6 Classes
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  // 2. Add a getter called 'speedUS'
  get speedUS() {
    this.speed /= 1.6;
    console.log(`${this.make} is going at ${this.speed} mi/h`);
    return this.speed;
  }

  // 3. Add a setter which sets current speed in mi/h
  set speedUS(convSpeed) {
    this.speed = convSpeed / 1.6;
    console.log(`${this.make} is going at ${this.speed} mi/h`);
    this.speed *= 1.6; //Return value to km/h before storing
  }
}

// 4. Create a new car
const ford = new CarCl('Ford', 120);

ford.speedUS;
ford.speedUS = 150;

//Jonas Schmedtmann Implementation

/*

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);

*/
