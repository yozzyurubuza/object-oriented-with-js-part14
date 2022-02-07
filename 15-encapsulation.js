'use strict';

// Encapsulation: Protected Properties and Methods
// JS does not actually support real data privacy and encapsulation

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //Can make new properties even not within parameters
    // Protected property (Add _)
    this._movements = [];
    this.locale = navigator.language;
    //Can also execute any code
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  //If you want to make movements still accessible to public
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  //Abstracted the minus sign (Abstraction)
  withdraw(val) {
    this.deposit(-val); // Can use other methods inside the class
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//Not a good idea to do this, make a new method instead
// Protected property is still accessible
// acc1._movements.push(250);
// acc1._movements.push(-140);

//We're using the interface that we created (deposit, withdraw)
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000); //Not accessible anymore
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin); //Also protected
