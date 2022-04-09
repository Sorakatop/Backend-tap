// requires
const express = require ('express');
const apiRouter = require('./routes/api');
const app=express();
//require('./db');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',apiRouter);




app.listen(3000,()=>{
    console.log('server is running on port 3000');
})