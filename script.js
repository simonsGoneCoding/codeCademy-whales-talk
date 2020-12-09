const input = "some text";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(input[i])
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }

  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
}

const resultToString = resultArray.join("").toUpperCase() + "!!!";
console.log(resultToString);
