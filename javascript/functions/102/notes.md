# JavaScript Functions 102
## An arrow function expression is more concise than the traditional function expression. However, there are caveats. (not discussed here)

### Advantages (not complete list)

The `function` keyword is replaced with `=>`
```javascript
const someFn = function() {
    return 'Hello World';
};

const someFn = () => {
    return 'Hello World';
};
```

The curly braces and the `return` keyword can be removed entirely if everything can fit on one line.
```javascript
const someFn = function() {
    return 'Hello World';
};

const someFn = () => 'Hello World';
```

You can remove parantheses if there is only one argument.
```javascript
//one argument
const greeting = function(name) {
    return `Hello ${name}`;
};

const greeting = name => `Hello ${name}`;

// more than one argument
const location = function(city, state) {
    return `The location is ${city}, ${state}`;
};

const location = (city, state) => `The location is ${city}, ${state}`; // implicit return, no return needed to be stated
```

A `retrurn` that spans multiple line can either use an explicit `return`, with curly braces, or an implict `retun` with parantheses.
```javascript
const studentDetails = function(){
    return{
        name: Angela,
        age: 16,
        grade: 91
    }
};

//explicit
const studentDetails = () => {
    return{
        name: Angela,
        age: 16,
        grade: 91
    }
};

//implicit
const studentDetails = () => (
    {//curly brace denoting this as an object
        name: Angela,
        age: 16,
        grade: 91
    }
);

```