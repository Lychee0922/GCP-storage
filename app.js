require('dotenv').config()

const express = require('express')
const path = require('path')
const userRouter = require('./routes/users')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')));
app.use(userRouter)
app.use(express.json)

let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)
})