// Part-1

function tellStory(name, mood, activity) {
  if (
    typeof name !== "string" ||
    typeof mood !== "string" ||
    typeof activity !== "string"
  ) {
    return "Not valid input";
  } else {
    return `This is ${name},.${name} is a nice person.Today they are ${mood}.They are ${activity} all day.`;
  }
}

console.log(tellStory("Petar", "happy", "play tennis"));

// Part-2

function isValid(number) {
  if (isNaN(number)) {
    return false;
  }

  return true;
}

function sumNumbers(numbers) {
  let sum = 0;
  numbers.forEach((element) => {
    if (isValid(element)) {
      sum += element;
    }
  });

  return sum;
}

console.log(sumNumbers([1, 2, 3, 4, 5]));

// Part-3
function concatenateString(strings) {
  return strings.join(" ");
}

console.log(
  concatenateString(["Hello", "World", ". This", "is", "the", "end"])
);

// Part-4
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + "\n");
  } else {
    console.log(i + " ");
  }
}

// Part-5
function determineNumbers(numbers) {
  let min;
  let max;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        min = numbers[i];
      }

      if (numbers[i] > numbers[j]) {
        max = numbers[i];
      }
    }
  }

  return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}

console.log(determineNumbers([1, 2, 3, 1, 9]));

// Part-6
function combineStudents(arr1, arr2) {
  students = [];

  for (let i = 0; i < arr1.length; i++) {
    students[i] = `${arr1[i]} ${arr2[i]}`;
  }

  return students;
}

console.log(
  combineStudents(
    ["Martin", "Stefan", "Ratko"],
    ["Stefkovski", "Bumbarovski", "Petrovski"]
  )
);
