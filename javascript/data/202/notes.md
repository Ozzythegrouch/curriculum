# JavaScript Data 202
## The syntax to read data depends on the data type or the data collection in which data types are found.

### arrays
We use an index to read data from an array by enclosing the index value withing square brackets.
```
const shoppingList = ['apples', 'celery', 'bread'];
console.log(shoppingList[0]); // apples
```
JavaScript considers arrays to be objects. So the shopping list above looks like this to JavaScript.
```
const shoppingList = {
    0: 'apples',
    1: 'celery',
    2: 'bread'
};
```
#### bracket notation 
used for objects
 car['mileage']


#### dot notation 
used for objects
car.mileage 

for simple data types we just write the variable

### objects
We use bracket notation or dot notation to read data.
'''
const cars = 
    {
    color: 'green',
    mileage: 67302,
    isNew: false
    };
console.log(car['mileage']) // -->67302
console.log(car.mileage) // -->67302  
'''

### strings, boolean, and numbers
Refer to the variable name to read data.
'''
const name = 'Paul';
console.log(name); // --> Paul
```