/* --------------------------------------------------------------------------- 
    FUNCIONES QUE VOY A UTILIZAR EN LAS PETICIONES (ARCHIVO routes)
--------------------------------------------------------------------------- */

/* ---------- Conexion a DB ---------- */
const dbConnect = require('../../config/database');


const render_index = (req,res)=>{
    res.render('pages/index');
}

const render_shop = (req,res)=>{
    /* ---------- UTILIZACION DE JOIN MEDIANTE SELECT / FROM / WHERE: Ya que si seleccionamos varias tablas y no hacemos coincidir los valores de las columnas relacionadas, obtendremos una gran duplicidad de filas, realizándose el producto cartesiano entre las filas de las diferentes tablas seleccionadas ---------- */
    dbConnect.query('SELECT * FROM drumheads, cymbals, drumsets WHERE id_drumh = id_cymb AND id_cymb = id_drum',(error,data)=>{
        if(error){
            console.log(error);
        }else{
            res.render('pages/shop',{
                data
            });    
        };
    });
}

const render_news = (req,res)=>{
    res.render('pages/news');
}

const render_who = (req,res)=>{
    res.render('pages/who');
}

module.exports = {
    render_shop,
    render_index,
    render_news,
    render_who
};