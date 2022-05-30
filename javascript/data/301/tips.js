// Write a function that takes in a billAmount, a tipPercentage, and returns the tip amount.


function tipAmount(billAmount, tipPercentage){
    return billAmount * tipPercentage;
}
billAmount = 20;
tip = 15;
tipPercentage = .15;
console.log(`Your bill for the food is ${billAmount}. At a ${tip}% tip, your tip is $${tipAmount(billAmount,tipPercentage)}.`);
//console.log(tipAmount(billAmount, tipPercentage));