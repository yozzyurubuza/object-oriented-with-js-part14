'use strict';

// Encapsulation: Private Class Fields and Methods
// JS does not actually support real data privacy and encapsulation
//Property = fields

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version)

class Account {
  // 1. Defining a public fields (instances)
  locale = navigator.language;

  // 2. Private fields (instances only, not on the prototype)
  #movements = [];
  #pin; // Don't set anything

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3. Public Methods
  // Public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // Returning this (object) will make this method chainable
  }

  //Abstracted the minus sign (Abstraction)
  withdraw(val) {
    this.deposit(-val); // Can use other methods inside the class
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Will not be available on all instances, only at the class itself
  static helper() {
    console.log('Helper');
  }

  // 4. Private methods - Seen as private class fields
  //   #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//Not a good idea to do this, make a new method instead
// Protected property is still accessible
// acc1._movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000));

//Chaining Methods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
