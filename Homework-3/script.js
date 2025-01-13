// # Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.
// ### Examples
// ```sh
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120
// ```
// ### Notes
// * Don't forget to return the result.

function convert(minutes) {
  if (isNaN(minutes)) {
    return "Not valid input";
  }
  return minutes * 60;
}

console.log(convert(4));

// # Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// ### Examples
// ```sh
// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2
// ```
// ### Notes
// * Don't forget to return the result.

function addition(number) {
  if (isNaN(number)) {
    return "Not valid input";
  }
  return number + 1;
}

console.log(addition(3));

// # Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.
// ### Examples
// ```sh
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400
// ```
// ### Notes
// * Don't forget to return the result.
// * Maybe you can use some function from previous tasks.

function howManySeconds(hours) {
  if (isNaN(hours)) {
    return "Not valid input";
  }
  return hours * 3600;
}

console.log(howManySeconds(10));

// # Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// ### Examples
// ```sh
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
// ```
// ### Notes
// * The tests only use positive and negative integers.
// * Don't forget to return the result.

function remainder(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Not valid input";
  }
  if (num1 === 0 || num2 === 0) {
    return "Can't divide with zero";
  }
  return num1 % num2;
}

console.log(remainder(5, 0));

// # Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// * chickens = 2 legs
// * cows = 4 legs
// * pigs = 4 legs

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// ### Examples
// ```sh
// animals(2, 3, 5) ➞ 36
// animals(1, 2, 3) ➞ 22
// animals(5, 2, 8) ➞ 50
// ```
// ### Notes
// * Don't forget to return the result.
// * The order of animals passed is animals(chickens, cows, pigs).
// * Remember that the farmer wants to know the total number of legs and not the total number of animals.

function animals(chicken, cows, pigs) {
  if (isNaN(chicken) || isNaN(cows) || isNaN(pigs)) {
    return "Not valid input";
  }
  return chicken * 2 + cows * 4 + pigs * 4;
}

console.log(animals(2, 3, 5));

// # Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// ### Examples
// ```sh
// compare("AB", "CD") ➞ true
// compare("ABC", "DE") ➞ false
// compare("hello", "sedc") ➞ false
// ```
// ### Notes
// * Don't forget to return the result.
// * You can find more about the [Length] property.

function compare(string1, string2) {
  if (typeof string1 === "string" || typeof string2 === "string") {
    return "Not valid input";
  }
  return string1.length === string2.length;
}

console.log(compare("abcs", "abcd"));

// # Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
// ### Examples
// ```sh
// isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false
// ```
// ### Notes
// * Don't forget to return the result.
// * Remember that return true (boolean) is not the same as return "true" (string).
// * You can use javascript build function [EndsWith]

function isPlural(word) {
  if (typeof word !== "string") {
    return "Not valid input";
  }
  return word.endsWith("s");
}

console.log(isPlural("changes"));

// # Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.
// ### Examples
// ```sh
// match("hello", "hELLo") ➞ true
// match("motive", "emotive") ➞ false
// match("venom", "VENOM") ➞ true
// match("mask", "mAskinG") ➞ false
// ```
// ### Notes
// * Don't forget to return the result.
// * You can use javascript build function [toLowerCase]

function match(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Not valid input";
  }
  return string1.toLowerCase() === string2.toLowerCase();
}

console.log(match("hello", "heLLo"));

// # Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// | Number | Month Name |
// | ------ | ------ |
// | 1 | January |
// | 2 | February |
// | 3 | March |
// | 4 | April |
// | 5 | May |
// | 6 | June |
// | 7 | July |
// | 8 | August |
// | 9 | September |
// | 10 | October |
// | 11 | November |
// | 12 | December |
// | any other number | Month with that number does not exists |

// ### Examples
// ```sh
// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"
// ```
// ### Notes
// * Don't forget to return the result.
// * You can use flow controll structure [switch]

function monthName(monthIndex) {
  if (isNaN(monthIndex) || monthIndex > 12 || monthIndex < 1)
    return "invalid input";

  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "Octomber",
    10: "November",
    11: "December",
  };

  return months[monthIndex - 1];
}

console.log(monthName(1));

// # Task 10: Truthy or Falsy?
// A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:
// * false
// * null
// * undefined
// * 0
// * [NaN]
// * ""

// In JavaScript, an empty object and an empty array are both considered [truthy], but an empty string is considered false when evaluated as a Boolean (this behavior is what we call [falsey]).
// Create a function that takes an argument of any data type and returns 1 if it's [truthy] and 0 if it's [falsey].
// ### Examples
// ```sh
// isTruthy(0) ➞ 0
// isTruthy(false) ➞ 0
// isTruthy("") ➞ 0
// isTruthy("false") ➞ 1
// ```
// ### Notes
// * You may have to take into account [NaN]'s unique behavior in JavaScript. While other falsey values are equal to themselves, [NaN] != [NaN]

function isTruthy(dataType) {
  if (dataType) {
    return 1;
  }

  return 0;
}

console.log(isTruthy("false"));
