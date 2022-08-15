const express = require('express'); // require gives access to express package
const path = require('path');

const server = express(); //execute the export in server, access to methods and properties

server.use(express.static(path.resolve(`${__dirname}/public`))); //path resolve, look in this folder for static files
server.use(express.json());

server.get('/', (req, res) =>{
    res.sendFile('./index.html');
}) // name is the endpoint we are hitting, in this case the root

server.post('/', (req,res) => {
    console.log(req.body)
})

server.listen(8080, () => {
    console.log('The server is running on port 8080.')
}) // starts up server