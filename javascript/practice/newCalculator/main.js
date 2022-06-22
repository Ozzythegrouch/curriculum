const numbers = document.querySelector('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelector('.operators');

let displayNumbers = '';


numbers.addEventListener('click',function(e){
    const digit = e.target.innerText; // *1 converts strings to numbers
    displayNumbers += digit;
    const isNumber = e.target.getAttribute('data-number');
    if(isNumber){
        display.innerText = displayNumbers;
    }
});

operators.addEventListener('click',function(e){
    const operator = e.target.getAttribute('data-operator');
    alert(operator)
});


// digits.addEventListener('click',function(e){
//     const digit = e.target.innerText;
//     const display = document.createElement('div');
//     display.innerText = digit;
//     digits.append(display);
// });

/*
addEventListener(type, fn){
    //do a bunch of stuff
    //const event ={}
    fn(event)
}


*/