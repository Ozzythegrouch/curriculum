# React 301
## An overview of `react-reacter`

- <Routing> refers to what the browser shows in the view at a given URL
- If a url ends in a <file extension>, it means that routing is controlled by the server
- `react-router` is an NPM library
- One advantage of <browser-side> routing is the site is faster
- When the browser handles routing, it means we can avoid sending additional requests to the <server>
- One challenge we have with browser-side routing is dealing with to <shared state>
- You can think of routing is a <broadcast-subscription> relationship
- Routing is all about <matching> the view to the URL
- `npm i <react-router-dom>` is the command to add react-router as a dependency to the project
- We must wrap the entire application in the <`<BrowserRouter />`> component
- Broadcasting a change in the URL can be done with the <`<NavLink />`> component
- The <`to`> prop on the `<NavLink />` component becomes the <`href`> attribute on an anchor tag in HTMl
- Each individual <`<Route />`> must be contained within a parent <`<Routes />`> component
- The <`path` prop on `<Route />` matches a `to` prop on `<NavLink />`
- When there’s a match between the broadcast and the subscription, the component set in the <`element`> prop is rendered in the view

---

#### Key terms and phrases
1. <s>broadcast-subscription</s>
2. <s>`<BrowserRouter />`</s>
3. <s>browser-side</s>
4. <s>`element`</s>
5. <s>file extension</s>
6. <s>`href`</s>
7. <s>matching</s>
8. <s>`<NavLink />`</s>
9. <s>`path`</s>
10. <s>react-router-dom</s>
11. <s>`<Route />`</s>
12. <s>`<Routes />`</s>
13. <s>Routing</s>
14. <s>server</s>
15. <s>shared state</s>
16. <s>`to`</s>