// For loops
// used for executing blocks of codes number of times

// format for For loops
// for (statement1; statement2; statement3) {
    //block of code to execute
// }

// statement 1 - declaration that is executed once
// statement 2 - condition for executing the block of code
// statement 3 - runs after every loop

for (let i =0; i < 10; i++ ) { //as long as i is less than 10 code will run
    console.log(i);             // ++ means add 1
}
// once condition is met, code stops runnning

for (let i = 10; i < 20; i++) {
    //this will print from 10 to 19
    console.log(i);
}

//prints numbers from 0 to 4
for(i = 0; i < 5; i++) {
    //does not need to include let
    console.log(i)
}

//prints all numbers from 100 to 91
for (i = 100; i > 90; i--){ //-- subtracts 1
    console.log(i);
} // ctrl + c stops execution of code

//prints all even numbers between 1 and 20
for (i = 1; i < 21; i++)
   if (i % 2 == 0) {    // != means not
       console.log(i);
   }

// to print out in form of array

let emptyArray = [];
 for (let i =0; i < 10; i++) {
     emptyArray.push(i);
 }
 console.log(emptyArray);

 const arrayOfFriends = ['Karen', 'George', 'Sam', 'Bob', 'Susan'];

 //this for loop will print all elements of array

 for(let i = 0; i < arrayOfFriends.length; i++) {
     console.log(arrayOfFriends[i]);
 }

 for(let i = 0; i < 2; i++) {
    console.log(arrayOfFriends[i]); //square brackets for array
}

