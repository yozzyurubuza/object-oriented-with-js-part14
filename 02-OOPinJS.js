'use strict';

// OOP in Javascript

/*

*Classical OOP: Classes

Class       ----->    Instance
       Instanatiation

-Objects (instances) are instantiated from a class, which functions like a blueprint

-Behavior (methods) is copied from class to all instances


*OOP in JS: Prototypes

Object (can access methods) ----> Prototype (contains methods)

-Objects are linked to a protype object.

-Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype.

-Instance inherting from a class

-Behavior is delegated to the linked prototype object.

Ex. 
Array.map() - Array.prototype is the prototype of all array objects we create in Javascript

-Therefore, all arrays have access to the map method.

-----------------------

// 3 Ways of Implementing Prototypal Inheritance in Javascript

*How do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects, without having classes?

*How do we implement OOP in Javascript?

1. Constructor Functions
    - Technique to create objects from a function
    - This is how built-in objects like Arrays, Maps, or Sets are actually implemented.


2. ES6 Classes
    - Modern alternative to constructor function syntax
    - "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions
    - ES6 classes do NOT behave like classes in "classical OOP"


3. Object.create()
    - The easiest and most straightforward way of linking an object to a prototype object.





*/
