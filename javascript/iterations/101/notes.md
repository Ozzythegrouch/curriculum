# Iterations 101
## Imperatively looping over arrays.

### Terms

**`break`**
Exits a loop programmatically. Used only with imperative statement.


**`continue`**
Skips over code withing a loop, but allows the loop to continue. Used only with imperative statements. 


**imperative programming**
Exposes the execution of steps taken in order to achieve a result- the HOW is just as important as the WHAT.


**infinite loop**
    An iteration which had no exit condition, so it runs infinitely. command + '.' to exit out of loop. 


**iterate**
To cycle through each individual item in a list.


**statement**
A loop construct.


### Statements

**for**
The Statement has three parts- _begin_, _condition_, and _next_. After _begin_, which is executer only once, the order of firing is _condition_, _body_, and _next_.

```javascript
for (let i = 1; i < 10; i++){
    console.log(i);
}

for (let i = 1; i < 10; i++){ // 1, 2, 3, 4, 5, 6, 7, 8, 9
    if(i % 3 !== 0) continue; // if number is divisible by 3 it prints out value
    console.log(i);
}
```

**while**
Executes code as long as the condition is `true`. It is possible that the condition is written so that the code never executes.

```javascript
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}

// break when `count` is 5
let count = 10;
while (count > 0) {
    if (count === 5){   
    console.log('We reached 5!');
    break;
    }
    console.log(count); 
    count--;                                 
}
```

**do while**
Executes code as long as the condition is `true`. It will always execute code in the body at least once.

```javascript
let i = 0;
do{
    console.log(i);
    i++;
} while (i < 3)
```

**for...of**
Iterates by value. This is a more succint alternative to the **for** statement explained above.

```javascript
const items = ['apples', 'rice', 'soup'];
for(const item of items) {
    console.log(item);
}
```