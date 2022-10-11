 React 102
## Managing state in React with `onClick`

### State
- The term we use to refer to the value of some variable in <memory> at a given moment in time is <state>
- Understanding how and when state <changes> is critical to becoming a strong developer
- A hook is simply a <function> (before hooks, some developers would have called it a <helper function>)
- All hooks in React are <named> exports so to import a React hook, <curly braces> are necesary
- Managing state requires a named <noun> and a named <verb> of your choice (the former holds a value while the latter sets the value)
- The syntax includes a <destructuring assignment> on an <array> 
- The `useState` hook is <excuted> with `useState()`
- Passing an <argument> to the `useState` hook is optional but doing so will set the <initial state>
- The value for state can be accessed anywhere within the <JSX> but must be enclosed within a set of <curly braces>.

### Click handlers
- With React components, we no longer need the <`.addEventListener`> method to listen for events, such as clicks
- And we don't need to worry about <event delegation> either since it is no longer necessary ([source](https://github.com/facebook/react/issues/13635))
- For click events, we use the <`onCLick`> event listener directly on the element
- The value for this listener is known as the <event handler>
- The <event handler> can be defined inline or as a separate function; in either case, it changes state via the named <verb> defined in the syntax that calls the `useState` hook
- Whenever state changes, React automatically <re-renders> the component so that UI properly reflects the change

---

#### Key terms and phrases
- <s> `.addEventListener` </s>
- <s>argument</s>
- <s>array</s>
- <s>changes</s>
- <s>curly braces</s>
- <s>curly braces</s>
- <s>destructuring assignment</s>
- <s>event handler</s>
- <s>event handler</s>
- <s>event delegation</s>
- <s>executed</s>
- <s>function</s>
- <s>helper function</s>
- <s>initial state</s>
- <s>JSX</s>
- <s>memory</s>
- <s>named</s>
- <s>noun</s>
- <s>`onClick`</s>
- <s>re-renders</s>
- <s>state</s>
- <s>verb</s>
- <s>verb</s>