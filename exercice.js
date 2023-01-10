// Exercice 1 : Simple If/Else Statement

// Create 2 variables, x and y. Each of them should have a different numeric value.
let x = 10;
let y = 20;

// Write an if/else statement that checks which number is bigger.
if (x > y) {
  console.log(x +" is the biggest number");
} else {
  console.log(y +" is the biggest number");
}


// Exercise 2 : Chihuahua

// Create a variable called where it’s value is “Chihuahua”
let newDog = "Chihuahua";

// Check and display how many letters are in
console.log("there are"+ newDog.length+" letters in newDog");

// Display the variable in uppercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase);

// Display the variable in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toLowerCase);

// Check if the variable is equal to “Chihuahua”
if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas, it's my favorite dog breed");
} else {
  console.log("I don't care, I prefer cats");
}
// Results
console.log("there are"+ newDog.length+" letters in newDog");



// Exercise 3: Even Or Odd

// Prompt the user for a number and save it to a variable.
let number = prompt("Enter a number:");
// Check whether the variable is even or odd

// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
if (number % 2 === 0) {
  console.log(`${number} is an even number.`);

// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
} else {
  console.log(`${number} is an odd number.`);
}


// Exercise 4: Group Chat

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:

let userCount = users.length;

// If there is no users (the users array is empty), console.log “no one is online”.
switch(userCount) {
  case 0:
    console.log('no one online');
  break;

// If there is 1 user, console.log “ is online”.
  case 1:
    console.log(`${users[0]} online`);
  break;

// If there are 2 users, console.log “ and are online”
  case 2:
    console.log(`${users[0]} and ${users[1]} online`);
  break;

// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
  default:
    let remaining = userCount - 2;
    console.log(`${users[0]} and ${users[1]} and ${remaining} more online`);
  break;
}