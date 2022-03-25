/* ---------------------------------------
    CONEXION CON LA BASE DE DATOS
--------------------------------------- */

const mysql = require('mysql2');

const dbConnect = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'drumat_db'
});

dbConnect.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Servidor SQL conectado");
    };
});

module.exports = dbConnect;