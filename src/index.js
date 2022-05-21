const express = require('express')
const bodyParser = require('body-parser');
const monitores =require('./components/monitores/routes')
const {Routers} =require('./routes')
const cors=require('cors')
const app = express();


app.use(express.json())
app.use(cors());

Routers(app);



app.listen(3000,()=>{
    console.log(`Server listening on port ${3000}`)
});


