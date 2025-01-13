let input = prompt("Enter your birth year: ");
let birthYear = parseInt(input);
let zodiacFormula = (birthYear - 4) % 12;
let zodiac = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

function calculateZodiac(birthYear, zodiacFormula, zodiac) {
  if (isNaN(birthYear)) {
    console.log("Not valid input");
    return;
  }
  console.log(zodiac[zodiacFormula]);
}

calculateZodiac(birthYear, zodiacFormula, zodiac);
