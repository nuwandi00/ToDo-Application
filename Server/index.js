const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nuwa:nuwa@todo.uejsxd3.mongodb.net/test')

app.post('/add', (req =>{
    const task = req.body.task;
}))

app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})

