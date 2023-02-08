const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')

const app = express()

app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:admin@coderbackend.0pp623p.mongodb.net/?retryWrites=true&w=majority', error => {
  if (error) {
    console.log(`Cannot connect to db. Error: ${error}`)
  }
})

router(app)

module.exports = app