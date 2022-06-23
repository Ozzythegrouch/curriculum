# Iterations 102
## Declaratively looping over arrays

### Terms
**declarative programming**
Hides the execution steps taken to achieve a result- the WHAT is more important than the HOW.

**method**
A function available to a specific data type (e.g. string) or a collection (e.g. array)


### Methods
In each of the methods below, we provide a callback function for at least one argument.

**`.forEach`**
Executes logic on each item of an array. The return value is `undefined`.
```javascript
const list = ['apples', 'rice', 'soup'];
list.forEach(function(item, index){
    console.log(`item ${index + 1}is ${item}`);
});
```


**`.map`**
Returns a new array that manipulates each item of the array on which it is called in some way
```javascript
const list = ['a', 'b', 'c'];
const newList = list.map(function(item, index){
    return item.toUpperCase();
});
```


**`.filter`**
Returns a new array that is a subset of items of the array on which it is called.
```javascript
const list = [1, 2, 3, 4];
const evens = list.filter(function(item, index){
    item %2 === 0;
})
```


**`.reduce`**
Returns a single combined value which aggregates the items of the array on which it is called in some way.
```javascript
const list = [1, 2, 3, 4];
const total = list.reduce(function(sum,item){
    return sum + item
}, 0); // sum is an accumalator
```

const button = document.getElementById('btn') // gets cached
button.addEventListener('click',function(event){
    // some logic
    const target = e.target;
}) //button is element

function addEventListener(type,fn){
   // does some logic
   // define event = {};
   fn(event)
}