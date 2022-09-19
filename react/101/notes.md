# React 101

## A Brief Introduction to React

### React

- React is a <1>library available at [NPM](https://www.npmjs.com/package/react)
- As such, any project built with React will have the file <2>packagejson even though React is used to write front-end-code
- A react project is built from separate <3>components which keep the code compartmentalized
- It was created and maintained by developers at <4>Facebook
- React uses <5>shadow-DOM to update HTML DOM; your React code should not <6>manipulate the HTML DOM directly
- React attaches itself to the DOM through the <7>entry point which is located in src/index.js
- All of the code related to components is contained with the <8>src directory

### Components
- Components are <9>functions that share similarities with JavaScript <10>render functions
- They must always return <11>JSX
- JSX stands for <12>JavaScript XML
- It looks like <13>HTML but it is not <14>HTML
- Each element in JSX must have either a corresponding closing tag or <15>self-closing tag
- JSX can have only one <16>parent element; all others must be nested inside of it
- Components are exposed and consumed for use through <17>import and <18>export statements; this makes it quite easy to pass them around as needed
- Elements within JSX have <19>props, short for properties, but they look like HTML attributes
- Some of them are actually identical to HTML attributes, such as <20>id, but others are different, such as <21>className instead of class.
- Unlike the functions you have learned about up until now, a component is not called but is <22>rendered instead
- Rendering happens when the component is included within the <23> of another component
- The components form a tree whose root is contained within React's <24>render method of the <25>
- Each component name in React must begin with <26>capital letter but the filename itself does not have to be <27>capitalized
- The extension of the filename can be .js or .jsx but <28>.jsx is preffered
- A component's return is not followed by any <29>data type or <30>data structure that you have previously learned about
- if the component returns a <31>single element, it is written on one line
```javascript
return <p>Hello World</p>;
```

- However, a multi-line return needs <32>parantheses
```javascript
return{
    <div>
        <p>Hello</p>
        <p>World</p>
    </div>
};
```