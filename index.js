// console.log("hey backend!");
require('dotenv').config()

const express = require('express')
const app = express() //express ke fxns app me store kr di humne
const port = process.env.PORT; //65535 ports are free...khi par bhi listen krlo like 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('about me')
    // this is a calllback fxn
})
app.get('/contact', (req, res) => {
    res.send('we are using cookies......conatact us in future!')
})
app.get('/login', (req, res) => {
    res.send('<h1>Login Here</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`My app listening on port ${port}`)
})
