// write a tip calculator function that takes in a billAmount, and a service rating ('good' -> 20% tip, 'fair' -> 15% tip, 'bad' -> 10% tip), and returns the tip amount. 
// examples
// tipAmount(100, 'good') --> returns 20
// tipAmount(100, 'fair') --> returns 15
// tipAmount(100, 'bad') --> returns 10

// write a function that takes in an array of numbers and returns an array of only even numbers
// example evenArray([1, 3, 6, 8, 10]) --> returns [6, 8, 10]

// write a function that takes in an array of numbers and returns an array of only positive numbers
// example evenArray([-4, -80, 5, 16]) --> returns [5, 16]

// write a for loop that prints the odd numbers between 105 and 125

// let good = 20;
// let fair = 15;
// let bad = 10;
// const serviceRating = ["good","fair","bad"];


// function tipCalc(billAmount, serviceRating = [good,fair,bad]) {
//       if (billAmount < 0) {
//           return 'You must use a positive bill amount to use this function!';
//       } else if (billAmount > 0, serviceRating[good]) {
//           return ((billAmount * 20) / 100) ;
//       } else 'Terrible no tip for you.'
//   };


// write a function that takes in an array of numbers and multiplies each number in the array by 5
// example multiplyArray([1, 6, 10]) --> returns [5, 30, 50]

// write a function that prints the mileage of each of the cars in this array of objects
// const myCars = [
   // { make: 'Chevy', model: 'Camaro', year: 2014, mileage: 75000 },
   // { make: 'Ford', model: 'Mustang', year: 2021, mileage: 8000 },
   // { make: 'Dodge', model: 'Challenger', year: 2008, mileage: 125000 },
   // { make: 'Mercedes', model: 'G Wagon', year: 2022, mileage: 500 },
   // ];


//takes array of numbers, prints events
function onlyEvens (array){
        let response = [];    
        for (let i = 0; i < array.length; i++) {
           if(array[i] % 2 == 0){
              response.push(array[i]); 
            }
         }
      {
        return response 
   }
}
console.log(onlyEvens[1, 3, 6, 8, 10]);


// outputs only positive numbers
function onlyPositive (array) {
   let posArray = [];
    for (let i = 0; i < array.length; i++) {
       if(array[i] % 2 > 0){
         posArray.push(array[i]);
    }
   } 
  {
   return posArray;
  }
}
console.log(onlyPositive[-4, -80, 5, 16]);

// write a for loop that prints the odd numbers between 105 and 125

function oddNumbers(allOdds){
   let oddNums = [];
   for(let i = 105; i <= 125; i++) {
      if(allOdds[i] % 2 != 0){
         allOdds.push(oddNums[i]);
      }
   }
   {
      return oddNums;
   }
}

console.log(oddNumbers[105]);



// write a function that takes in an array of numbers and multiplies each number in the array by 5

function multiplyArray(num){
   let mulArray = []
   for (let i = 0; i < mulArray.length; i++); {
      if(num[i] * 5){
         num.push(mulArray[i]);
      }
      {
         return mulArray
      }
   }
}   

console.log(multiplyArray[1,6,10]);

// write a function that prints the mileage of each of the cars in this array of objects

const myCars = [
   { make: 'Chevy', model: 'Camaro', year: 2014, mileage: 75000 },
   { make: 'Ford', model: 'Mustang', year: 2021, mileage: 8000 },
   { make: 'Dodge', model: 'Challenger', year: 2008, mileage: 125000 },
   { make: 'Mercedes', model: 'G Wagon', year: 2022, mileage: 500 },
   ];

// myCars.forEach(myCar => {
//       for (let mileage in myCars)
      
//    {
//       console.log(`mileage: ${myCar.mileage}`)
//    }
// });
for (let i = 0; i < myCars.length; i++) {
 
    console.log(myCars[i].mileage);
 }