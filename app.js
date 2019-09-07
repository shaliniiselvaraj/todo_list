var createError=require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var models=require("./models");
models.sequelize.sync().then(function(){
    console.log('Database looks fine');
}).catch(function(err){
    console.log(err,'something went wrong');
});
require('./routes')(app);
app.get('*',(req,res)=>res.status(200).send({
    message:'Welcome',
}));
module.exports = app;