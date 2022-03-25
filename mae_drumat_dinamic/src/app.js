/* -----------------------------------------------
    ARCHIVO PRINCIPAL DE LA APLICACION / WEB
----------------------------------------------- */

/* -------------------- DECLARACIONES DE PAQUETES -------------------- */
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes');
const dbConnect = require('../config/database');

/* ---------- CONFIGURACION PARA UTILIZAR FORMATO JSON ---------- */
app.use(express.json());

/* ---------- PARA PODER UTILIZAR OBJETOS / ARRAYS ---------- */
app.use(express.urlencoded({extended:false}));

/* -------------------- CONEXION A MI BASE DE DATOS -------------------- */
dbConnect.connect();

/* ----- ESTABLEZCO DIRECTORIOS Y MOTOR DE VISUALIZACION ----- */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

/* --------------------  REQUEST A PAGES -------------------- */
app.use('/',routes);

/* --------------------  LISTENING PUERTO3000 -------------------- */
app.listen(3800,()=>{
    console.log("Server corriendo en puerto 3800");
});