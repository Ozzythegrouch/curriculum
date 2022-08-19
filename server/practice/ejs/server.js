const express = require('express') //gives access to packages for server
// const path = require('path');

const server = express() //executes the export into server, gives access to methods and properties

server.use(express.json()) // middleware executes request before server
server.use('/css', express.static(__dirname + "/css"))
server.use('/js', express.static(__dirname + "/js"))

server.set('view engine', 'ejs')

server.get('/', (req,res) => {
    res.render('pages', {template: 'landing', isAuthenticated: false})
})

server.post('/login', (req,res) => {
    res.json(req.body)
})
server.listen(8080, () => {
    console.log('The server is running on port 8080')
})

