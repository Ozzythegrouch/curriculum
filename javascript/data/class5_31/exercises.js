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


  //takes array of numbers, prints events
  function onlyEvens (array){
        let response = []    
        for (i = 0; i < array.length; i++) {
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
   let response = []
    for (i = 0; i < array.length; i++) {
       if(array[i] % 2 > 0){
         response.push(array[i]);
    }
   } 
  {
   return response
  }
}
console.log(onlyPositive[-4, -80, 5, 16]);