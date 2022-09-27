# React 103
## React props are similar to the argument and parameter of a JavaScript function

A JavaScript function that takes one or more `arguments` is defined with the same number of `parameters`
```javascript
// definition --> `name` is the `parameter`
function greeting(name) {
  return `Hello ${name}`;
}

// execution --> `'Andrea'` is the `argument`
greeting('Andrea');

```
- As such, they are related and we could say that a parameter and its corresponding argument form a `key/value` pair
- React components do not have parameters or arguments; instead they have `props`
- A prop is a key/value pair where the key acts as the `prop name` and value acts as the `argument`
- In React parlance, we say that props are `passed down` to a component
- Under the hood, React passes the props to a component on an object, usually called `props`, although you could name it whatever you want
- In order for the component to access the props being sent to it, it must `capture` the passed-in `props` object
- To save writing some code, you can also `destructure` the object with a set of `curly braces`
- Once captured, a prop value can be used within a component by wrapping its corresponding `parameter` within a set of curly braces
- Below is a React `Greeting` component
```jsx
function Greeting(`props`) {
  return <p>Hello {props.name}</p>;
}
```
- And `destructuring` it looks like this
```jsx
<Greeting name="Andrea" />
```
- Its `rendering` equivalent is
```jsx
function Greeting(`{name}`) {
  return <p>Hello `{name}`</p>;
}
```

---

#### Key terms and phrases
1. <s>argument</s>
2. <s>argument</s>
3. <s>arguments</s>
4. <s>capture</s>
5. <s>curly braces</s>
6. <s>destructure</s>
7. <s>destructuring</s>
8. <s>Greeting</s>
9. <s>key/value</s>
10. <s>`{name}`</s>
11. <s>`{name}`</s>
12. <s>parameter</s>
13. <s>parameter</s>
14. <s>parameters</s>
15. <s>passed down</s>
16. <s>prop name</s>
17. <s>props</s>
18. <s>props</s>
19. <s>`props`</s>
20. <s>rendering</s>