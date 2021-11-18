const express = require('express')
const app = express();
const mongoose = require('mongoose');
const body_parser = require('body-parser')
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/StudentDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

const port = 5000;

app.get('/', (req, res) => {
    res.json({ 'message': 'APP is working...' })
})



// A mongoose schema is define the structure of the object....
//default value, validator etc..


const stuListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    class: String,
    college: {
        type: String,
        default: "LPU"
    },
    marks: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }

})


const StudentList = new mongoose.model("StudentList", stuListSchema);

app.post('/api/student', (req, res) => {

    const createDocument = async () => {
        try {
            const stu = new StudentList(req.body);
            console.log(stu)
            const result = await Stu.save();
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

app.listen(port, () => console.log(`Server is running on port ${port}`))