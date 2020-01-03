const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const cors = require('cors');


const config = require('./config');

const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = config.database;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// mongoose.connect(config.database, (err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("Connected  to the database");
//     }
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req,res, next) => {
    res.json({
        user: 'Cleilson Pereira'
    });
});


app.listen(config.port, err => {
    console.log('Magic happens  on port' + config.port);
});