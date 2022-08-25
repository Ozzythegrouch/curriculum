const express = require('express'); // brought into memory
const cookieParser = require('cookie-parser')

const server = express(); //creating instance

server.use(express.json())
server.use(cookieParser())

server.get('/', (req,res) => {
    res.json({message: 'You are at the root'})
})

server.post('/body', (req,res) => {
    console.log('body', req.body)
    res.json({message: 'You are at /body'})
})

server.get('/cookies', (req,res) => {
    console.log('cookies', req.cookies)
    res.json({message: 'You are at /cookies '})
})

server.get('/params/:someRoute', (req,res) => {
    console.log('params', req.params)
    res.json({message: 'You are at /parmas'})
})

server.get('/query', (req,res) => {
    console.log('query', req.query)
    res.json({message: 'You are at /query'})
})

server.listen(8080, () => {
    console.log('The server is running at PORT 8080')
})