/* ------------------------------ 
    FRAGMENTANDO EL RUTEO
------------------------------ */

const express = require('express');
const routes = express.Router();
const { render_shop, render_index, render_news, render_who } = require('../controllers/controllers');

routes.get('/',render_index);
routes.get('/shop',render_shop);
routes.get('/news',render_news);
routes.get('/who',render_who);

module.exports = routes;