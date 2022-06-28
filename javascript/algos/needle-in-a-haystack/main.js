function findNeedle(haystack) {
    //haystack is an array
    // find needle in array
for(let i = 0; i < haystack.length; i++) { //iterate length of array
    if(haystack[i] === 'needle') {
        return `found the needle at position ${i}`;
    } 
    }
}  
// return 'Found the needle at position' + index
//codewars