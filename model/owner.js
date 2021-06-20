const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Owner = new Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
     email:{
        type:String,
        required:true,
        unique:true
    }, 
    password:{
        type:String,
        required:true,
        unique:true
    },
}); 

module.exports = mongoose.model('Owner',Owner)