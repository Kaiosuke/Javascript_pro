// --------------Hàm--------------

/**
 * Code trong thân hàm sẽ được thực thi
 * */

// function showGreeting1() {
//   console.log("Xin chao");
// }

/** Gọi hàm
 * Code trong thân hàm sẽ được thực thi
 */

// showGreeting1();

/**
 * Hàm có tham số (Parameters)
 */

// function showGreeting2(tittle) {
//   console.log(tittle);
// }

// showGreeting2("Hello");

/**
 * title: Tham số Parameters
 * Hello đối số Arguments
 */

// function showGreeting3(title, message) {
//   console.log(title, message);
// }

// showGreeting3("Hello3", "Message");

/**
 * Tham số mặc định (Default, parameters)
 *
 *
 */

// function showGreeting4(title = "Hello", message = "default massage") {
//   console.log(title, message);
// }

// showGreeting4("", "kai");

/**
 * Hàm trả về giá trị
 *
 */

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(5, 5);

// console.log(result);

// -----Practice-----

// student 1

// let mathScore1 = 7;
// let biologyScore1 = 8;
// let chemistryScore1 = 6;

// // student 2

// let mathScore2 = 9;
// let biologyScore2 = 4;
// let chemistryScore2 = 3;

// // student 3

// let mathScore3 = 5;
// let biologyScore3 = 8;
// let chemistryScore3 = 7;

// function averageScore(score1, score2, score3) {
//   let total = (score1 + score2 + score3) / 3;
//   return total;
// }

// console.log(averageScore(mathScore2, biologyScore2, chemistryScore2));

// lưu ý temporal dead zone

// const run = () => {
//   const sum = (a, b) => {
//     return a + b;
//   };
//   return sum(2, 3);
// };

// const result = run();

// console.log(result);
