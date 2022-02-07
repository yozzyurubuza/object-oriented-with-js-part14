'use strict';

//What is Object-Oriented Programming

/*

*Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.

    *Paradigm - Style of code, "how" we write and organize code

*We use objects to model (describe) real-world or abstract features.

    *Real-world - user / todo list item
    *Abstract features - HTML component or data structure

*Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block.

*In OOP, objects are self-contained pieces / blocks of code;

*Objects are building blocks of applications, and interact with one another.

    *Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object

*OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code")

--------------------------

//Classes and Instances (Traditional OOP)

Class - like a blueprint from which we can create new objects

    *Javascript does not support real classes, works a bit differently.

Instance - new object created from the class. Like a real house created from an abstract blueprint

----------------------------

//The 4 Fundamental OOP Principles

*How do we actually design classes? How do we model real-world data into classes?

1. Abstraction - ignore or hide details that don't matter allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation

Ex. addEventListener function, we just focus on the 2 arguments that it needs to work.


2. Encapsulation - keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).

    - Prevents external code from accidentally manipulating internal properties/state.

Ex. variables inside a function is not accessible outside the function or in the global scope


3. Inheritance - making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.

Ex. User and Admin - Admin has all the functions of user, just with additional functions, so to avoid code duplication, inheritance comes into play.

User (parent class) 
Admin (child class) -> child class extends parent class


4. Polymorphism - A child class can overwrite a method it inherited from a parent class (it's more complex than that, but enough for our purposes).

Ex. User, Admin, and Author - Admin has a different type of login, Admin still inherits the properties from parent class, but can overwrite by making a SAME function name with different parameters or logic.



*/
