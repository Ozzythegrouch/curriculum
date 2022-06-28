function digitize(n) {
//   console.log(typeof n);
//    console.log(typeof n.toString());
//    console.log(n.toString().split('').reverse());
    const strArr = n.toString().split('').reverse();
    const result = strArr.map(item => item * 1);
    return result;
  }

//   let rn;
//   for (i = n; i >= 0 ; i++) {// take in numbers
//     if n >= 0   {     // push numbers to array 
//       return rn.push(n)
//       }
//   else {
//     return 'number is not positive'
//     }
  
// }