var countSheep = function (num){
    if(!num) return '';//!num means num = 0
    let response = ''; //concactanating 
    
    for(let i = 1; i <= num; i++){
      response += `${i} sheep...`//response = response + `{$} sheep...`
    }  
    return response;
   } 
    
  //   if (num == 0)
  //     return ''
  //   //your code here
  //   let sheep = '';
  //   for (let i = 0; i < num; i++){
  //     sheep += `${i+1} sheep..`;
      
  //     }
  //   return sheep
  