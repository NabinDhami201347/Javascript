//An array is a special variable, which can hold more than one value at a time.
let array = ["Nabin", 19, "Hello"];

console.log(array[1]);
console.log(array[-1]); //returns undifefined
console.log(typeof array); //Array is stored as object
console.log(array);

array[0] = "Dhami"; //Changing value
array[3] = 45; //Adding Element
console.log(array);
const [name, age] = array; //object destructuring
console.log(array.length); //For finding length of an array
console.log(name);
