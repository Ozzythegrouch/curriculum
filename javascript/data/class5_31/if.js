//if statements

//if (condition) {

// }

// if condition is true, execute code in curly braces

const myAge =35

if (myAge < 100) {
    console.log('You are still young!');// this code ran, because my age is less than 100
}

if (myAge <21) {
    console.log('You arre a baby!');//this code did not run, because my age is not less than 21
}

const daysOfWeek ='Tuesday';

if (daysOfWeek == 'Friday') {
    // checking if my variable is equal to Friday
    console.log('Today is Friday');
} else{
    console.log('Today is NOT Friday!'); //this code runs
}

if (daysOfWeek == "Monday") {
      console.log("Today is Monday!");
    } else if (daysOfWeek == "Tuesday") {
      console.log("Today is Tuesday!");
    } else if (daysOfWeek == "Wednesday") {
        console.log('Today is Wednesday');
    } else {
        console.log('Today is not Monday, Tuesday, or Wednesday.')
    }


// add if statement to tipAmount function exercise

const tipAmount = (billAmount, tipPercentage) => {
  if (billAmount < 0) { // check fist that billAmount passed in is positive, if not code will run this
      return 'You must use a positive bill amount to use this function!';
  } else {
      return (billAmount * tipPercentage) / 100; // if the bill amount passed is positive, this code will run
  }
};

console.log(tipAmount(20,15));


function isNumberEvenOrOdd(num) {
    if(num % 2 == 0) {// % checks if value is devisible by 2, if no remainder, number is even
      return 'Number is even'
    } else {
      return 'Number is odd'; // if number is not even it has to be odd
    }
}

console.log(isNumberEvenOrOdd(5)); // 15 is odd

// Write a functions that checks a user's age
//if a user is under 18, return "You are not allowed to use this page"
// if a user is over 18, but under 21, return " You are allowed to see some of this page"
//if a user is over 21, return "You have full access to this page"

function userAge(age){
    if (age < 18) {
      return 'You are not allowed to use this page'; //will ignore the rest of statements if less than 18
    }else if (age < 21) {
      return 'You are allowed to use some of this page'; // remembers that you're over 18 so now verifyng you are under 21
    }else {
      return 'You have full access to this page'; // over 18 and 21, this block runs
    }
}

console.log(userAge(12)) // returns not allowed to use this page
console.log(userAge(19)) // returns you have some access
console.log(userAge(25)) // returns full access

//

const myPassword = "password123"

function checkPassword(password){
    if (password.length == 0) { //checks if anything was entered, if nothing this runs
        return 'Please enter a password.'
    } else if (password === myPassword) { ///checks if values match, must be exact has three ===
        return 'Welcome your password was correct.'
    } else {
        return 'You may not enter, your password is incorrect.';
    }
}

console.log(checkPassword(''));
console.log(checkPassword('p'));
console.log(checkPassword('password123'));