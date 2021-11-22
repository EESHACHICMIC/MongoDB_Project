const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { application } = require('express')
const app = express();
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/LMS",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connection successful`))
    .catch((err) => console.log(err));