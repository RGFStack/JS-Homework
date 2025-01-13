// Part-1

function printType(param) {
  return typeof param;
}
let notDeclared;
console.log(printType({}));
console.log(printType(true));
console.log(printType(8));
console.log(printType(""));
console.log(printType(notDeclared));

// Part-2

function calculate(humanAge) {
  if (isNaN(humanAge)) {
    return "Nota valid input";
  }
  return humanAge * 7;
}

console.log(calculate(7));

// Part-3

let input = prompt("Enter the amount");
parseInt(input);
let balance = 9000;
function atm(money) {
  if (money > balance) {
    return "Not enough money";
  } else {
    return balance - input;
  }
}
console.log(atm(input));
