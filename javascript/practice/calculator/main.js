const calculator = document.getElementById('calculator');
const output = document.getElementById('output');

let = outputValue = '';

calculator.addEventListener('click', function(e) {
    const clickId = e.target.getAttribute('data-clickId');
    // if clickId is a string of text it NaN and isOperator will be true
    const isOperator = isNaN(clickId * 1);
    if (isOperator) {
        outputValue += `${clickId}`;
    }else {
        outputValue += clickId;
    }
    //outputValue = outputValue + clickId
    output.innerText = outputValue;
});//takes two arguments

// addEventListener(string, fn) {
    //code
//    fn(event);
// }

//concatenate - put them together