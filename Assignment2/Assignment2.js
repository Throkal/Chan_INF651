
// 1. Variables and Data Types
let name = "Barvor";              
let age = 23;                    
let isStudent = true;            

console.log("Name:", name, "- Type:", typeof name);
console.log("age:", age, "- Type:", typeof age);
console.log("Is Student:", isStudent, "- Type:", typeof isStudent);

// 2. Basic Arithmetic Operations
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 3. Working with Strings
let sentence = "Assignment 2";
console.log("Sentence length:", sentence.length);
console.log("First character:", sentence.charAt(0));
console.log("Last character:", sentence.charAt(sentence.length - 1));

// 4. Math Object
let negativeNum = -25;
console.log("Square root:", Math.sqrt(negativeNum)); //should normally absolute it first since square caant be negative
console.log("Number Squared:", negativeNum ** 2);
console.log("Absolute value:", Math.abs(negativeNum));

// 5. Boolean Logic and Comparison Operators
let a = 5;
let b = 9;

console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a == b:", a == b);

// 6. Logical Operators
let c = true;
let d = false;

console.log("c && d:", c && d);
console.log("c|| d:", c || d);
console.log("!c:", !c);

// 7. Using Template Literals
let firstName = "Chivithrokal";
let lastName = "Chan";

let greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);
