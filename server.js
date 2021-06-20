const express  =  require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require("cors");



connectDB();
const app = express();
app.use(express.json());
// init middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.json({extended: false}));



app.get('/',(req,res)=> res.send('API RUNNING'));

//defining routes
app.use('/api/owner',require('./routes/owner/owner'));
app.use('/api/product',require('./routes/product/product'));



//app.use('/api/order',require('./routes/user/user'));


const  PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server start on port ${PORT}`));
