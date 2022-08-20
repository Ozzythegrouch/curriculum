# Server 101
## We use the `express` library to build servers

### Steps to build a single server
Follow these steps in the project root folder
- `npm innit -y`
- `npm i express`
- `npm i -D nodemon`
- `touch server.js`
- add the code to build a server( see **demo/**)
- `npx nodemon server.js`

### Headers already sent error
- an endpoint can send only one response
- when this error occurs, make sure only one response is actually being sent