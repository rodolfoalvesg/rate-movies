const res = require('express/lib/response');
const mysql = require('mysql');
require('dotenv').config()
const conn = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_BASENAME || ''
});

conn.connect(err => {
    if (err) {
       console.log("Não foi possível conectar")
    }else{
        console.log("Conectado..!")
    }

    
})

module.exports = conn;