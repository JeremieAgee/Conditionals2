const prompt = require('prompt-sync')();
console.log(`Let's Learn about if statements!`);
console.log(`********************************`);

// This assignment will focus on if statements and the operators: >, <, and ===.

let animal;

animal = prompt(`Enter an animal: `);


if(animal === "dog") {
  console.log(`This is a dog!`);
} else if(animal === "cat") {
  console.log(`This is a cat!`)
}

let age;
age = prompt(`Enter your age: `);
if(age < 12) {
  console.log(`You are a child.`)
} else if (age < 20) {
  console.log(`You are a teenager`);  
}
// TODO: continue adding age ranges using the < operator and the else if statement.


// TODO: 4 more variables and prompts.
// for each prompt, use if statements and ===, <, or > to respond to them.









// Bonus:
// try to make a number guessing game.
// if the number too high or too low, tell the player.
// keep it up until the number is guessed.
// hint: you will need a while loop.
// You can learn about while loops here: https://www.youtube.com/watch?v=PpbFyLTtpWI

// Additional bonus:
// Expand on your gift recomendation engine. Allow a user to enter answers to your questions to select the perfect gift!