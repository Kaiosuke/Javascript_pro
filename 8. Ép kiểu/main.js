// const isNumber = (num) => {
//   if (typeof num === "number" && !isNaN(num)) {
//     return num;
//   } else {
//     return Number(num);
//   }
// };

// const calculate = (a, b, operator) => {
//   if (isNumber(a) && isNumber(b)) {
//     switch (operator) {
//       case "add":
//         return +a + +b;
//         break;
//       case "subtract":
//         return a - b;
//         break;
//       case "multiply":
//         return a * b;
//         break;
//       case "divide":
//         return a / b;
//         break;

//       default:
//         return "Invalid operator";
//     }
//   } else if (isNumber(b) === 0) {
//     return "Cannot divide by zero";
//   } else {
//     return "Invalid input number";
//   }
// };

// console.log(calculate("5", "3", "add")); // 8
// console.log(calculate("5", "3", "subtract")); // 2
// console.log(calculate("5", "3", "multiply")); // 15
// console.log(calculate("5", "0", "divide")); // Cannot divide by zero
// console.log(calculate("five", "3", "add")); // Invalid input number
// console.log(calculate("5", "three", "add")); // Invalid input number
// console.log(calculate("5", "3", "modulus")); // Invalid operator

const formatName = (firstName, lastName) => {
  return (firstName ?? lastName) ?? `${"" ?? firstName} ${"" ?? lastName}`;
};

// Sample usage
console.log(formatName("John", "Doe")); // John Doe
console.log(formatName(null, "Doe")); // Doe
console.log(formatName("John")); // John
console.log(formatName());
