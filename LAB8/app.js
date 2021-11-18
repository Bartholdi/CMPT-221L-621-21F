const express = require('express');
const app = express();
 
const mongoose = require('mongoose');
const passport = require('passport');
 
const PORT = 3000;
 
mongoose.connect("mongodb+srv://Student:CorgisAreDope@cluster0.h6c8l.mongodb.net/Lab-8?retryWrites=true&w=majority");
 
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
 
app.use('/', require('./routes/index'));
  
app.listen(PORT, ()=>{
    console.log("running on "+PORT)
})