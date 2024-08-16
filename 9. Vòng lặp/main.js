// const timUCLN = (a, b) => {
//   if (b > a) {
//     const temp = a;
//     a = b;
//     b = temp;
//   }

//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// };

// console.log(timUCLN(10, 20));

// function printFibonacci(n) {
//   let a = 0,
//     b = 1,
//     next;

//   while (b <= n) {
//     next = a + b;
//     a = b;
//     b = next;
//   }
// }
// printFibonacci(5); // 0, 1, 1, 2, 3, 5
// printFibonacci(10); // 0, 1, 1, 2, 3, 5, 8

// const countGreaterThan = (arr, value) => {
//   let num;
//   if (arr.length < 2) return 0;
//   for (i = 2; i <= arr.length; i++) {
//     console.log(i);
//     if (i === value) {
//       num = arr[i];
//     }
//   }
//   return num;
// };

// // console.log(countGreaterThan([1, 5, 7, 2, 3], 3)); // 2
// console.log(countGreaterThan([2, 3, 4, 5, 6], 3)); // 2
// // console.log(countGreaterThan([2], 3)); // 2

// const alternateSum = (arr) => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       total += arr[i];
//       console.log(total);
//     } else {
//       total -= arr[i];
//       console.log(total);
//     }
//   }
//   return total;
// };

// // Sample usage
// alternateSum([10, 5, 6, 3]); // 8 (10 - 5 + 6 - 3)

// const sumOfSquares = (arr) => {
//   let average = 0;
//   for (let i = 0; i < arr.length; i++) {
//     average += arr[i] ** 2;
//     console.log(average);
//   }
//   return average;
// };

// console.log(sumOfSquares([1, 2, 3])); // 14 (1^2 + 2^2 + 3^2 = 14)

// console.log("appplke".length);

// const findLongestWord = (arr) => {
//   let string = "";
//   for (i = 0; i < arr.length; i++) {
//     if (string.length < arr[i].length) {
//       string = arr[i];
//     }
//   }
//   return string;
// };

// // Sample usage
// console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // banana

// console.log(findLongestWord(["hello", "world", "this", "is", "great"])); // hello

const findMissingNumber = (arr, bigNum) => {
  let totalA = 0,
    totalB = 0;

  console.log(arr.length, bigNum);

  for (let i = 0; i < arr.length; i++) {
    totalA += arr[i];
  }

  for (let j = 0; j <= bigNum; j++) {
    totalB += j;
  }

  return totalB - totalA;
};
// Sample usage
// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
// console.log(findMissingNumber([1, 2, 3, 4], 4)); // 0

// console.log(findMissingNumber([1, 2, 3, 5], 5)); // 4
