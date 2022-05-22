const mysql = require('mysql2');
const myConnection = require('express-myconnection');
require('dotenv').config();

module.export =()=>{
    
    return mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
    });
    
    
};



