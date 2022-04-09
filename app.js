// requires
const express = require ('express');
var createError = require('http-errors');
const apiRouter = require('./routes/api');
const app=express();
//require('./db');

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api',apiRouter);




app.listen(3000,()=>{
    console.log('server is running on port 3000');
})

module.exports=app;