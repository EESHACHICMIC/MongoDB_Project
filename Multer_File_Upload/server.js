const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const path = require('path')
const app = express();
const port = 5000;

const fileStorageEngine = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/single', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send("Single file is uploaded successfully")
})

app.post('/multiple', upload.array('image', 3), (req, res) => {
    console.log("req.files")
    res.send('Multiple file is uploaded successfully..')
})

app.listen(port, () => console.log(`server is running ${port}`))