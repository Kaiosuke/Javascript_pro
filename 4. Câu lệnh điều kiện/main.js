// Toán tử so sánh trả về kiểu dữ liệu Boolean
// if - else - else if
// Toán tử 3 ngôi

// const convertNumberToMonth = (month) => {
//   if (month === 1) {
//     return `tháng 1`;
//   } else if (month === 2) {
//     return `Tháng 2`;
//   } else if (month === 3) {
//     return `Tháng 3`;
//   } else if (month === 4) {
//     return `Tháng 4`;
//   } else if (month === 5) {
//     return `Tháng 5`;
//   } else if (month === 6) {
//     return `Tháng 6`;
//   } else if (month === 7) {
//     return `Tháng 7`;
//   } else if (month === 8) {
//     return `Tháng 8`;
//   } else if (month === 9) {
//     return `Tháng 9`;
//   } else if (month === 10) {
//     return `Tháng 10`;
//   } else if (month === 11) {
//     return `Tháng 11`;
//   } else if (month === 12) {
//     return `Tháng 12`;
//   } else {
//     return `Tháng không hợp lệ`;
//   }
// };

// console.log(convertNumberToMonth(99)); // Tháng một

// const classifyStudent = (score) => {
//   if (score > 8) {
//     return "giỏi";
//   } else if (score >= 6 && score <= 8) {
//     return "Khá";
//   } else {
//     return "Trung bình";
//   }
// };

// // Sample usage
// console.log(classifyStudent(9)); // Giỏi
// console.log(classifyStudent(7)); // Khá
// console.log(classifyStudent(1)); // Trung bình

// -------Switch case-------

// let result = 2;

// switch (result) {
//   case 1:
//     console.log("hello");
//     break;
//   case 2:
//     console.log("hi");
//     break;
//   default:
//     console.log("value");
// }

const simpleCalculator = (operator, a, b) => {
  if (b !== 0) {
    switch (true) {
      case operator === "+":
        return a + b;
      case operator === "-":
        return a - b;
      case operator === "/":
        return a / b;
      case operator === "*":
        return a * b;
      default:
        return "Phép tính không hợp lệ";
    }
  } else {
    return "Không thể chia cho 0";
  }
};

// Sample usage
console.log(simpleCalculator("+", 5, 3)); // 8
console.log(simpleCalculator("/", 10, 0)); // Không thể chia cho 0
console.log(simpleCalculator("**", 2, 3)); // Phép tính không hợp lệ
