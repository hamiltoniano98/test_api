
const cors =require('cors')
const express = require('express')
const app=express();
const mongoose =require('mongoose')
const bodyparser=require('body-parser')
const {urlencoded,json}=require('body-parser')
const taskRoute = require('./api/TaskPost')


mongoose.connect('mongodb+srv://hamilton:123ham@tienda.sfzkllf.mongodb.net/?retryWrites=true&w=majority&appName=tienda')
mongoose.connection.on('connected',()=>{
    console.log('perfect')
})
mongoose.connection.on('error',(err)=>{
    console.log('fuck')
})

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//routes
app.use('/task',taskRoute)

module.exports=app;
