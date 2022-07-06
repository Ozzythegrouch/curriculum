function oddOrEven(array) {
   //list of integers
   let sum = 0;
   //add array
   for (let i = 0; i < array.length; i++){
     sum += array[i];
     }
     //even
     if (sum % 2 === 0) {
       return 'even'
     } 
       return 'odd'
 }
// second format

 function oddOrEven(array) {
    //callback function with argument
    //reduce can take several arguments
    //reduce adds all items in an array
    //0 is initial value
     const sum = array.reduce((a,b) => a + b, 0);
    //ternary operator
    //question to set we are asking
     return sum % 2 === 0 ? 'even' : 'odd';
  }