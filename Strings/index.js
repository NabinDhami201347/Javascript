// JavaScript strings are primitive values. JavaScript strings are also immutable.
// It means that if you process a string, you will always get a new string.
// The original string doesn’t change.

// To create literal strings in JavaScript,
// you use either single quotes or double quotes

const name = "Nabin";
console.log(name.length); //Getting the length of the string
console.log(name[2]); //Accessing characters
const greeting = "Good Morning" + " " + name; //Concatenating strings
console.log(greeting);
console.log(name.slice(2, 4)); //Slicing strings
console.log(name.toUpperCase()); //Converting to uppercase
console.log(name.toLowerCase()); //Converting to Lowercase
