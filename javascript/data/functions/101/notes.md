# JavaScript Functions 101
## A general overview

### Terms

**anonymous function**
A function that is not named ( see also function expression). In this function expression, the function part is considered anonymous.
```
const greeting = function(){
    return `Hello ${name}`;
}
```


**argument**
A hardcoded value passed into a function when it is executed.
In the example below `'John'` in between the parantheses is the argument.
```
greeting('John')
```


**call**
An action which executes (or fires) the function.


**callback function**
Executes within the function to which it is passed as an argument.

```
const cb = function() {
    console.log('I am the callback.');
}

function greeting(name,fn) {
    fn(;
    return `Hello ${name}`);
}

greeting ('Billy', cb)
```



**function**
There are two contexts. One is the function definition itself. Another is the code within the definition which executes when called and which sometimes returns a value.


**function body**
Contains the code of the function itself within a set of curly braces.


**function declaration**
Uses the _function_ keyword to declare a named function. The name of the function immediately follows the _function_ keyword.
```
function greeting() {
     return 'hello, you sure look nice today.';
 }
```


**function expression**
A function that is the initialization of a variable declaration. The variable, which is named, stores the function, but the function itself is considered anonymous or unnamed.

```
const greeting = function() {
    return 'hello, you sure look nice today.';
 }
 ```

**hoisting**
Allows a function declaration to be used in code before it is declared.


**IIFE**
An _immediately invoked function expression_ is a function that is executed directly by the JavaScript engine and not by other code.
```
function ({
    return 'Hello';
}) ();
```
IFFE can also have arguments and parameters.
```
(function (name) {
    return `Hello ${name}, you sure look nice today.`;
}
```


**named function**
See function declaration.


**parameter**
A placeholder whose value equals the argument passed into the function when it was called. This value is accessed only within the function itself.
In the example `name`inside of the parantheses is the parameter.
```
function greeting() {
     return 'hello, you sure look nice today.';
 }
```


**parantheses**
The parantheses have two purposes. One is to execute a function. Another is part of the syntax to define a function. In the former, it may contain arguments. In the latter, it may contain parameters.


**return**
If implented, it executes the last line of a function's code. It preceds a data type or a collection to be returned. We say that a function closes or exits when the code that follows _return_ executes which also means that any line beneath it are ignored.


**scope**
Refers to what values are available in memory at a given time during the execution of code.

