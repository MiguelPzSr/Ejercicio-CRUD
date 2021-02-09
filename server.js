const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/foodRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://user-pepe:pepeuser@cluster0.vaju8.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(foodRouter);

app.listen(3000, () => { console.log('server running on 3000') });