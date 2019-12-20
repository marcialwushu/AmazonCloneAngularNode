const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();

mongoose.connect(config.database, (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("Connected  to the database");
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req,res, next) => {
    res.json({
        user: 'Cleilson Pereira'
    });
});


app.listen(config.port, err => {
    console.log('Magic happens  on port' + config.port);
});