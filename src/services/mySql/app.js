const mysql = require('mysql2');

require('dotenv').config();

module.exports = ()=>{
    
    return mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,       
        database: process.env.DATABASE
    });   
    
};



