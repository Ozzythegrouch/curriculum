const express = require('express'); //brings code into memory

const server = express();

server.use(express.json());

server.get('/name', (req,res) => {
    res.json({
        "firstName":"John", "lastName": "Doe"
    })
})

server.post('/name', (req,res) => {
    console.log(req.body)
    const {firstName, lastName} = req.body
    const fullName = firstName + lastName;
    res.json({ "fullname" : fullName})
});

server.listen(8080, () => {
    console.log('The server is listening at PORT 8080')
})

server.get('/age', (req,res)=> {
    res.json({ 
        "myAge":"33"
    })
})

server.post('/age', (req,res) =>{
    const {myAge} = req.body
    res.json({
        "message": `You are ${myAge} years old`
    })
})

server.post('/money', (req,res) => {
    const {checking, savings} = req.body

    const bankMoney = checking + savings
    res.json({
        "message" : `You have ${bankMoney} dollars in the bank.`
    })
})

//route param
server.get('/digital-crafts/cohort/:year', (req,res) => {
    console.log('year', req.params.year)
    res.json({
        "message":`I study at the Digital Crafts ${req.params.year} cohort.`
    })
})

server.get('/user/:user', (req,res) => {
    console.log('user', req.params.user)
    const user = req.params.user
    res.json({
        "message": `Hello, ${user}`
    })
})