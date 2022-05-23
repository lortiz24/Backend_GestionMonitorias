const express=require ('express');
const multer=require('multer');
const path = require('path');
const {Routers} =require('./routes')
require('dotenv').config()
const cors=require('cors')
const app = express();


app.use(express.json())
app.use(cors());

Routers(app);



app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
});


