function sameCase(a, b){
    // 97-122 lowercase characters
    // 65-90 uppercase characters  
      const _a = a.charCodeAt();
      const _b = b.charCodeAt();
      
      const checkIsLetter = (x, y) => {
         return (
           // is x a letter
           ((x >= 65 && x <= 90 ) || (x >= 97 && x <= 122)) && 
           // is y a letter
           ((y >= 65 && y <= 90 ) || (y >= 97 && y <= 122))
           );
         };
        
      const isLetter = checkIsLetter(_a, _b);
      
      const checkIsMatch = (x, y ) => {
        return (
          (x >= 65 && x <= 90  && y >= 65 && y <= 90) ||
          (x >= 97 && x <= 122  && y >= 97 && y <= 122)
        );
      };
      
      const isMatch = checkIsMatch(_a, _b)
      
      if(!isLetter) return -1;
      if (isMatch) {
        return 1;
      }else {
        return 0;
      }
    }
    
    
    // return aIsLetter && BIsLetter ? 1 : -1
    
    // // 65-90 uppercase characters  
    //   const _a = a.charCodeAt();
    //   const _b = b.charCodeAt();
      
    //   const isAUppercase = _a >= 65 && _a <= 90;
    //   const isBUppercase = _b >= 65 && _b <= 90;
    //   const isALetter = (_a >= 65 && _a <= 90) || (_a >=97 && _a <= 122)
    //   const isBLetter = (_b >= 65 && _b <= 90) || (_b >=97 && _b <= 122)
    //   const isLetter = isALetter && isBLetter;
    //   const isMatch = (isAUppercase && isBUppercase || (!isAUppercase && !isBUppercase )
    
    //   if (!isLetter) {
    //     return -1;
    //   }
      
    //   if(isMatch) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }