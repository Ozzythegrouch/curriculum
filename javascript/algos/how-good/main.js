function betterThanAverage(everyone, you) {
    let average = null;
    let total = 0;
    
    for(let i = 0; i < everyone.length; i++){
      total += everyone[i]; // total = total + everyone[i]
    }
    
    average = total/everyone.length;
    
    return you > average;
  }

  function betterThanAverage(x, y) {
      const total = x.reduce(function (prevValue, currValue){
            return prevValue + currValue;
      }, 0)
      const average = total/x.length;
      return y > average;
      // console.log(average, total);    
  }

  //reduce() iterates array.reduce(previousValue, currentValue)

//   const sumWithInitial = array1.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       initialValue
//   );