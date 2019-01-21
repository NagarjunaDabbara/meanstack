require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const rtsIndex = require('./routes/index.router');
const mongoose = require('mongoose')

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', rtsIndex);

app.use(express.static(path.join(__dirname, 'dist')))



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})


// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));