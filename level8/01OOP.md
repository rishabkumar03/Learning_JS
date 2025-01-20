# JAVASCRIPT AND CLASSES

the keyword class is used to create a class.

Always add a method named constructor():

Syntax:
class ClassName {
  constructor() { ... }
}

# OOP - Object Oriented Programming

# Object 

An Object is a unique entity that contains properties and methods. For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower and performs certain actions like driving. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string.

- so basically "An object is a collection of properties."
- toLowerCase : toThe toLowerCase() method returns the value of the string converted to lower case.

# Why use OOP

It ties data more securely to the function that operates on it and protects it from accidental modification from an outside function.

# Parts of OOP

Inheritance, Polymorphism, Encapsulation and Data Abstraction.

* Object Literal - An object literal is a list of property names:values inside curly braces {}. Example - {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

- Constructor Function : Object literals and constructors both are used to create an Object in JavaScript. Generally it is a reference to ownself.

- Prototypes : The __proto__ property can also be used in an object literal definition to set the object [[Prototype]] on creation, as an alternative to Object. create()

- Classes : a class is a template for defining objects

- Instances : an instance is like a unique copy of a blueprint.
- new : We can create an instance of an object using the new keyword.
- this : The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. 

# 4 pillars

- Abstraction : Abstraction simplifies the representation of objects by highlighting only the essential characteristics and behaviors while hiding unnecessary details.

- Encapsulation :  This principle involves bundling data (attributes) and methods (functions) that operate on that data within a single unit, known as a class.

- Inheritance : Inheritance is the process in which two classes have a relationship with each other, and objects of one class acquire properties and features of the other class.

- Polymorphism : Polymorphism allows objects to have multiple forms. This means that the same method can behave differently in different contexts.