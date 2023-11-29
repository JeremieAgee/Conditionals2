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
} else if (age<45){
  console.log(`You are a Adult`);  
}else if (age<65){
  console.log(`You are middle aged`);  
} else if(age>=65){
    console.log(`You are old`);  
}
// TODO: continue adding age ranges using the < operator and the else if statement.


// TODO: 4 more variables and prompts.
// for each prompt, use if statements and ===, <, or > to respond to them.
let car;
car = prompt('Enter a car brand: ');
if (car === "toyota"){
    console.log('You entered a Toyota');
} else if (car === "chevy"){
    console.log('You entered a Chevy');
} else if (car === "ford"){
    console.log('You entered a Ford');
} else {
    console.log('You entered a brand we do not carry');
}
let food;
food = prompt(`Enter a food: `);
if (food === "pizza"){
    console.log('You entered a pizza');
} else if (food === "pie"){
    console.log('You entered a pie');
} else if (food === "cake"){
    console.log('You entered a cake');
} else {
    let theFood = food;
    console.log('We do not carry: ' + theFood);
}
let income;
income = prompt('Enter your income: ');
if (income<15000){
  console.log('You are poor');
} else if (income<38000){
  console.log('You are lower class');
} else if (income<57000){
  console.log('You are lower-middle class');
} else if (income<114000){
  console.log('You are upper-middle class');
} else if (income>=114000){
  console.log('You are upper class');
}
let theAnswer, answer, correct;
correct = false;
theAnswer = Math.floor(Math.random() * 50);

while (correct!==true) {
  answer = prompt('Guess a number between 50: ');
  if (answer > theAnswer) {
    console.log(answer + ' is to high try Again.')
  } else if(answer < theAnswer){
    console.log(answer + ' is to low try Again.')
  } else if (answer == theAnswer) {
    console.log(`You guessed it!`);
    correct = true;
  }
}




// Bonus:
// try to make a number guessing game.
// if the number too high or too low, tell the player.
// keep it up until the number is guessed.
// hint: you will need a while loop.
// You can learn about while loops here: https://www.youtube.com/watch?v=PpbFyLTtpWI

// Additional bonus:
// Expand on your gift recomendation engine. Allow a user to enter answers to your questions to select the perfect gift!