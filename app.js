const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const redis = require('redis')
const indexRouter = require('./routes/index');

const client = redis.createClient()
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://agnynureza:a12345@ds261114.mlab.com:61114/irvins-server',{useNewUrlParser: true})
        .then(
            () => {console.log('Database Up Capt !')},
            err => {throw (`${err}`)})

client.on('connect', function(){
    console.log('Redis Client Connected !')
})

app.use('/', indexRouter);

module.exports = app;
