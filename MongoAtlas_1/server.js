const express = require('express')
const body_parser = require('body-parser')
const app = express();
app.use(express.json())
const port = 5000;


app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "APP is working"
    })
})

app.listen(port, () => console.log(`Server is running at ${port}`));