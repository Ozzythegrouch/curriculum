# React 101

## A Brief Introduction to React

### React

- React is a <library> available at [NPM](https://www.npmjs.com/package/react)
- As such, any project built with React will have the file <packagejson> even though React is used to write front-end-code
- A react project is built from separate <components> which keep the code compartmentalized
- It was created and maintained by developers at <Facebook>
- React uses <shadow-DOM> to update HTML DOM; your React code should not <manipulate> the HTML DOM directly
- React attaches itself to the DOM through the <entry point> which is located in src/index.js
- All of the code related to components is contained with the <src> directory

### Components
- Components are <functions> that share similarities with JavaScript <render> functions
- They must always return <JSX>
- JSX stands for <JavaScript XML>
- It looks like <HTML> but it is not <HTML>
- Each element in JSX must have either a corresponding closing tag or <self-closing> tag
- JSX can have only one <parent> element; all others must be nested inside of it
- Components are exposed and consumed for use through <`import`> and <`export`>statements; this makes it quite easy to pass them around as needed
- Components within JSX have <props>, short for properties, but they look like HTML attributes
- Some of them are actually identical to HTML attributes, such as <`id`>, but others are different, such as <`className`> instead of class.
- Unlike the functions you have learned about up until now, a component is not called but is <rendered> instead
- Rendering happens when the component is included within the <JSX> of another component
- The components form a tree whose root is contained within React's <render> method of the <entry point>
- Each component name in React must begin with <capital letter> but the filename itself does not have to be <capitalized>
- The extension of the filename can be .js or .jsx but <.jsx> is preffered
- A component's return is not followed by any <data type> or <data structure> that you have previously learned about
- if the component returns a <single element>, it is written on one line
```jsx
return <p>Hello World</p>;
```

- However, a multi-line return needs <parantheses>
```jsx
return{
    <div>
        <p>Hello</p>
        <p>World</p>
    </div>
};
```
--

#### Key terms and phrases
- <s>a capital letter</s>
- <s>capitalized</s>
- <s>`className`</s>
- <s>components</s>
- <s>data structure</s>
- <s>data type</s>
- <s>entry point</s>
- <s>entry point</s>
- <s>`export`</s>
- <s>Facebook</s>
- <s>functions</s>
- <s>HTML</s>
- <s>HTML</s>
- <s>`id`</s>
- <s>`import`</s>
- <s>JavaScript XML</s>
- <s>.jsx</s>
- <s>JSX</s>
- JSX
- <s>library</s>
- <s>manipulate</s>
- <s>package.json</s>
- <s>parent</s>
- <s>parentheses</s>
- <s>props</s>
- <s>render</s>
- <s>render<s>
- <s>rendered</s>
- <s>self-closing</s>
- <s>shadow DOM</s>
- <s>single element</s>
- <s>src</s>