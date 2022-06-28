function fakeBin(x){
    // console.log(x.split('')) //separates each character in a string into an array
    const strArr = x.split(''); //cache 
    const result = strArr.map(x => { //iterate over each array
      if (x < 5) return 0; // returning callback function
      if (x >= 5) return 1;
    }); 
    return result.join(''); //converts back to string
  }  
    
    
    
  // string of digits
  // less than 5 convert to string of 0
  // greater than 5 convert to string of 1
  // let stringOfDigits = '';
  //   for (i=0; i < length; i++){
  //     if (i < 5) {
  //       return 0
  //     } else if (i > 5){
  //       return 1
  //     } else (i == 5)
  //       return 'That is a 5.';
  //     }