const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working.."
    })
})
app.listen(port, () => console.log(`server is running ${port}`))