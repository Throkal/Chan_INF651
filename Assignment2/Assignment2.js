// Assignment 2 - JavaScript Basics

// 1. Variables and Data Types
let name = "Alice";              // String
let age = 22;                    // Number
let isStudent = true;            // Boolean

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);

// ----------------------------------------------------

// 2. Basic Arithmetic Operations
let num1 = 10;
let num2 = 3;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// ----------------------------------------------------

// 3. Working with Strings
let sentence = "JavaScript is fun!";
console.log("Sentence length:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));

// ----------------------------------------------------

// 4. Math Object
let negativeNumber = -9;
console.log("Square root:", Math.sqrt(Math.abs(negativeNumber))); // sqrt needs positive
console.log("Squared:", negativeNumber ** 2);
console.log("Absolute value:", Math.abs(negativeNumber));

// ----------------------------------------------------

// 5. Boolean Logic and Comparison Operators
let a = 15;
let b = 20;

console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a == b:", a == b);

// ----------------------------------------------------

// 6. Logical Operators
let x = true;
let y = false;

console.log("x && y:", x && y);
console.log("x || y:", x || y);
console.log("!x:", !x);

// ----------------------------------------------------

// 7. Using Template Literals
let firstName = "Alice";
let lastName = "Smith";

let greeting = `Hello, ${firstName} ${lastName}! Welcome to JavaScript.`;
console.log(greeting);
