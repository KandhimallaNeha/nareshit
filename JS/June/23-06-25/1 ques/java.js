
// parseInt() function will convert any datatype into integer(number)
// prompt() function to take the user input. this function always return string.
let n = parseInt(prompt("Enter a Number"));

n < 1000 ? console.log("No discount", n)
: n >= 1000 && n <= 5000 ? console.log("5% discount", n - ((n * 5)/100))
: console.log("10% discount", n - ((n * 10)/100) );


