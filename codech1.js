'use strict';

// 1. Use a constructor function to implement a 'Car'

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

// 2. Implement an 'accelerate' method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`New Speed: ${this.speed}`);
};

// 3. Implement a 'brake' method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`New Speed: ${this.speed}`);
};

// 4. Create 2 car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// console.log(car1);

//Jonas Schmedtmann Implementation
/*

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

*/
