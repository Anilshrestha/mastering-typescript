"use strict";
// printing hello TypeScript
console.log(`hello TypeScript`);
var myString = `this is a string`;
// type error check
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), `5678`];
myNumber = myStringArray.length;
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);
// Inferred typing
var inferredString = "this is a string";
var inferredNumber = 1;
// inferredNumber = inferredString; 
// TypeScript has inferred that the type of the variable inferredString is of type string
// eventhough we have not used the explicit :string type syntax
// Duck typing
var nameIdObject = { name: "myName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() { } };
//# sourceMappingURL=hello_typescript.js.map