//JavaScript program to swap two variables

//take input from the users
let x = prompt('Enter the first variable: ');
let y = prompt('Enter the second variable: ');

//using destructuring assignment
[x, y] = [y, x];

console.log(`The value of a after swapping: ${x}`);
console.log(`The value of b after swapping: ${y}`);