// Combined Example: Arrow Functions & Ternary Operator

// a) Arrow function to check even numbers
const isEven = (n) => n % 2 === 0;

// b) Using ternary operator for pass/fail
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";

// c) Arrow function greet with ternary operator
const greet = (name) => `Hello, ${name ? name : "Guest"}`;

// ✅ Testing all together
console.log(isEven(4));          // true
console.log(isEven(7));          // false
console.log(result);             // Pass
console.log(greet("Sam"));       // Hello, Sam
console.log(greet());            // Hello, Guest
