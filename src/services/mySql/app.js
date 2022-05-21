const mysql = require('mysql');
const myConnection = require('express-myconnection');
require('dotenv').config();

const DataBase = (collection)=>new Promise(async(resolve, reject)=>{
    const conection=mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
    
    conection.conection((err) => {
        if (err) throw err;
            console.log('Connected to database')
        
    });
});

export default DataBase;