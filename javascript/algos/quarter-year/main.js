Ozzythegrouch
const quarterOf = (month) => {
  // Your code here
  if(month >= 1 && month <= 3 ) return 1;
  if(month >= 4 && month <= 6 ) return 2;
  if(month >= 5 && month <= 9 ) return 3;
  if(month >= 10 && month <= 12 ) return 4;
}

// more tedious version lol
// const months = {
//     "1": 1,
//     "2": 1,
//     "3": 1,
//     "4": 2,
//     "5": 2,
//     "6": 2,
//     "7": 3, 
//     "8": 3,
//     "9": 3,
//     "10": 4,
//     "11": 4,
//     "12": 4
// };

// return months[month];