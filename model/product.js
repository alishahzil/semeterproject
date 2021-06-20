const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const Product = new Schema({
    catagorie:{
        type:String,
        required:true,
       
    },
    name:{
        type:String,
        required:true,
    },
     discription:{
        type:String,
        required:true,
    }, 
    gender:{
        type:String,
    },
    price:{
        type:String,
        required:true
    },
    age:{
        type:String,
    },
    pic:{
        type:String,
        required:true
    }
});
Product.plugin(mongoose_fuzzy_searching, { fields: ['catagorie', 'name','gender'] }); 

module.exports = mongoose.model('Product',Product);