//Functions
//How to declare a function:
//Give it a name
//Parantheses
//Space
//Curly braces
//If you declare but never call it, won't do anything.

//one way to declare a function

function myGreeting(){
    console.log('Hello World!');
}

//invoke function
myGreeting();

//That's how you declare function in JavaScript
//Prints things to the console

//Another way to declare function
const myOtherGreeting = () => {
    console.log('Hello from my fat arrow function!');
};
 
myOtherGreeting();

//make sure to habe parantheses when calling function
//fat arrow syntax is new way

// Activity

// passing a parameter to a function

function myPersonalizedGreeting(name) {
    console.log('Hello,' + name);
}

myPersonalizedGreeting('Anna');
// says hello to Anna

const myBffsName = 'Michael'

function myPersonalizedGreeting(name) { // whatever is used in parantheses has to be used within function
    console.log(`Hello there, ${name}`); // instead of single quotes use backtick
} // string interpolation

function madLibs(verb, pluralNoun) {
    console.log(`I ${verb} ${pluralNoun}.`)
}

const myVerb = 'eat';
const myPluralNoun = 'pencils';

madLibs(myVerb,myPluralNoun); 

// Write a function that takes in a name, a location, and a subject, and returns "My name is __, I am from __, and my favorite subject is ___!"

function me(newName, location, subject) {
    console.log(`My name is ${newName}, I am from ${location}, and my favorite subject is ${subject}.`)
}

const newName = 'Oscar';

const location = 'Los Angeles';
 
const subject = 'Sculpting';

me(newName,location,subject);

console.log(me(newName,location, subject));
// use return instead of console.log
// to see value of return, console.log

function addNumbers(num1, num2){
    return num1 + num2;
}
//nodeconsole.log(addNumbers(1,2));

// write 3 functions using return statement
// 1. Write a function that takes in 2 numbers and subtracts 2nd number from 1st number
// 2. Write a function that takes in 2 numbers, and multiplies them together
// 3. Write a function that takes in 2 numbers, divides 2nd number by 1st nunber

//1

function subNumbers(num1, num2){
    return num1 - num2;
}
console.log(subNumbers(15,10));

//2
function mulNumbers(num1, num2){
    return num1 * num2;
}
console.log(mulNumbers(2,3));

//3
function divNumbers(num1, num2){
    return num2 / num1;
}
console.log(divNumbers(3,6));

