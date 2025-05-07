require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hllo world!")
})

app.listen(process.env.PORT, () => {
    console.log(`my app is listening on ${process.env.PORT}`);
})