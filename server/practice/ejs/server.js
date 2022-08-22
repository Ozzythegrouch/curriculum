const express = require('express') //gives access to packages for server
// const path = require('path');

const server = express() //executes the export into server, gives access to methods and properties

server.use(express.json()) // middleware executes request before server
server.use('/css', express.static(__dirname + "/css"))
server.use('/js', express.static(__dirname + "/js"))
server.set('view engine', 'ejs')

const navs = ['About', 'Contact', 'Gallery']

server.get('/', (req,res) => {
    res.render('pages', {template: 'landing', isAuthenticated: false, navs})
})

server.post('/login', (req,res) => {
    // res.json(req.body)
    res.json({redirectURL: '/welcome'})
})

server.get('/logout', (req,res) => {
    // res.json(req.body)
    res.json({redirectURL: '/'})
})

server.listen(8080, () => {
    console.log('The server is running on port 8080')
})

server.get('/welcome', (req,res) => {
    res.render('pages', {template: 'gallery', isAuthenticated: true})
})

server.get('/About', (req,res) => {
    res.render('pages', {template: 'about', isAuthenticated: true})
})

server.get('/Contact', (req,res) => {
    res.render('pages', {template: 'contact', isAuthenticated: true})
})

server.get('/Gallery', (req,res) => {
    res.render('pages', {template: 'gallery', isAuthenticated: true})
})