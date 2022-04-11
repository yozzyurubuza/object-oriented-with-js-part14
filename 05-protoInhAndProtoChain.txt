'use strict';

//Prototypal Inheritance and Prototypal Chain

/*
                                //Not of Person, but objects created by person
Constructor function -----------> Prototype
    Person()          .prototype  calcAge()
                     <------------
                      .constructor


Person.prototype ----------> Object.prototype
                 .__proto__

*The new operator

1. An empty object is created
2. this keyword in constructor function call is set to to the new object
3. The new object is linked (__proto__ property) to the constructor function's prototype property
4. The new object is returned from th constructor function call

*This is how it works with function constructors and ES6 classes

Prototype Chain - Series of links between objects, linked through prototypes (Similar to the scope chain, but with prototypes)

Prototype - Where the object came from


*/
