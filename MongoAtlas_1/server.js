const express = require('express')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());
const port = 5000;


const mongoUrI = 'mongodb+srv://EESHA:eesha123@chicmic001.zrsra.mongodb.net/chicmic001?retryWrites=true&w=majority';

mongoose.connect(mongoUrI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful..!')
}).catch((err) => console.log(`Error occured during connection--->`, err))

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "APP is working"
    })
})

app.get('/about', (req, res) => {
    console.log(`this is about us page`)
    res.send('This is about us page')
})


app.listen(port, () => console.log(`Server is running at ${port}`));