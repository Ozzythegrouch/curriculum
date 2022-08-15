# Server

## 

- npm innit -y
writes json file

- npm install express , npm i espress

- "dependencies"
    "express", says what version was worked on

- everything you see on node modules is a dependency of express

- require('') gives access to packages for server to access

```javascript
const express = require('express')
```

- declare express into variable to give access to server
```javascript
const server = express(); //execute the export in server, access to methods and properties
```

- .listen starts up server, parameter is number and callback function

```javascript
server.listen(8080, () => {
    console.log('The server is running on port 8080.')
}) 
```

- node is on the server not the browser
this is how we display from the server to the browser

```javascript
server.get('/', (req, res) =>{
    res.send('I can hear you');
}) // name is the endpoint we are hitting, in this case the root
```

- npm i nodemon
like node, but refreshes everytime a change is made

- -D 
distinguishes from poroduction dependency vs developing dependency

- server call throughtout the application
    path.resolve is bulding path
    


```javascript
server.use(express.static(path.resolve(`${__dirname}/public}`))) //path resolve, look in this folder for static files
```
