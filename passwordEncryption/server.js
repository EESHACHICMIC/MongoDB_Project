const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { application } = require('express')
const app = express();
app.use(express.json())
const port = 5000;
const bcrypt = require('bcryptjs');

mongoose.connect("mongodb://localhost:27017/LMS",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connection successful`))
    .catch((err) => console.log(err));

const stuListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

const studentList = new mongoose.model("StudentList", stuListSchema);





app.post('/api/student', (req, res) => {

    const createDocument = async () => {
        try {

            const data = {
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10),

            }
            const stu = new studentList(data);
            const result = await stu.save();
            console.log(result)

            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            console.log(`error is generated`, error);
        }
    }
    createDocument();

})


app.get('/api/student', async (req, res) => {
    let student = await StudentList.find({}).lean();

    res.status(200).json({
        success: true,
        data: student
    })
})

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'API is working...'
    })
})
app.listen(port, () => console.log(`Server is running on port ${port}`))



