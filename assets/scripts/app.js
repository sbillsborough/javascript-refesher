// // comma separated list for multiple imports
// import { apiKey, abc } from "./util.js";

// // default value import, define a name now and still define the path
// import defaultApiKey from "./util.js";

// console.log("This is the imported API key: " + apiKey);
// console.log(abc);
// console.log(`This is the default import API key: ${defaultApiKey}`);

// // multiple imports grouped together as a JavaScript object (any name, this example is named util)
// import * as util from "./util.js";

// // multiple imports grouped together as a JavaScript object, console logged with dot notation
// console.log("multiple imports console log: " + util.abc);
// console.log("multiple imports console log: " + util.apiKey);
// console.log("Default import: " + util.default);

// // as keyword to asign an alias
// import { abc as content } from "./util.js";
// console.log("abc with alias content: " + content);

// // VARIABLES AND VALUES SECTION

// let userMessage = "Hello World!";
// userMessage = "Hi World!";
// const constMessage = "Hello World! Constant"; // Cannot reassign a value (read only) Used for when the value will never be reassigned

// console.log(userMessage);
// console.log(constMessage);

// // OPERATORS

// console.log(10 === "10"); //false === is strict equals that checks for value and type whereas == only checks the value, which would return true in this case.

// function vowels(value) {
//   // variable to store counter amount
//   let counter = 0;
//   // variable to store characters
//   let char = "";
//   // for loop that loops over the length of the characters in the string
//   for (let i = 0; i < value.length; i++) {
//     // converts each character [i] to lower case and adds then replaces each character to the char variable
//     char = value[i].toLowerCase();
//     // console.log(char);
//     // if the character in char is equal to a || e || i || o || u increment the counter value by 1
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       counter++;
//       // console.log(counter);
//     }
//   }
//   // ends function execution and specifies the value to be returned to the function caller
//   return counter;
// }

// console.log(vowels("Hello World"));

// BASEBALL GAME

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// var calPoints = function (operations) {
//   let sum = 0;
//   const stack = [];

//   for (const op of operations) {
//     if (op == "+") {
//       const val = stack[stack.length - 1] + stack[stack.length - 2];
//       stack.push(val);
//       sum += val;
//     } else if (op == "D") {
//       const val = stack[stack.length - 1] * 2;
//       stack.push(val);
//       sum += val;
//     } else if (op == "C") {
//       sum -= stack.pop();
//     } else {
//       stack.push(+op);
//       sum += +op;
//     }
//   }
//   return sum;
// };

// console.log(calPoints(["5", "2", "C", "D", "+"]));

// FUNCTIONS
// Not executed immediatly but at some point in the future when you call the function

// function keyword

function createGreeting(userName = "Random user", message = "Hello there") {
  return "What's up " + userName + ", " + message;
}

const bazGreeting = createGreeting("Baz", "how's it going?");
console.log(bazGreeting);
