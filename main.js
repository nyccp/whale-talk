//Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.
let input = "My life is a nice walkthrough in coding with special forces";

//Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.
const vowels = ["a", "e", "i", "o", "u"];

// Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
let resultArray = [];

//Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
  for (let y = 0; y < vowels.length; y++) {
    //To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.
    console.log(y);
    //Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array. Note: To check that everything is working properly, log letter matches to the console.
    if (input[i] == vowels[y]) {
      //Now instead of just logging the letters, add them to the results array.
      resultArray.push(input[i]);
      //Whales double their e‘s and the u‘s in their language.
      if (input[i] == "e" || input[i] == "u") {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray);

//Declare a variable resultString that joins our resultArray into a single string and capitalizes all of its letters.

resultString = resultArray.join("");
console.log(resultString);
