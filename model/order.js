const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const Order = new Schema({
    productid:{
        type:String,
        required:true,
        unique:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
     qunatity:{
        type:String,
        required:true
    }, 
    size:{
        type:String,
    },
    dateoforder:{
        type:Date,
        default:Date.now
    },
    dateofarrival:{
        type:Date,
        default: new Date(+new Date() + 7*24*60*60*1000)
    }
}); 

module.exports = mongoose.model('User',User)