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