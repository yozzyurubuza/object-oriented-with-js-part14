'use strict';

// Another Class Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    //Can make new properties even not within parameters
    this.movements = [];
    this.locale = navigator.language;
    //Can also execute any code
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  //Abstracted the minus sign (Abstraction)
  withdraw(val) {
    this.deposit(-val); // Can use other methods inside the class
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

//Not a good idea to do this, make a new method instead
// acc1.movements.push(250);
// acc1.movements.push(-140);

//We're using the interface that we created (deposit, withdraw)
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000); //Should not be able to access this method

console.log(acc1);
console.log(acc1.pin); //Shouldn't be accessible
