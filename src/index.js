// Imports 
const config = require('./config/config.js');
const express = require('express');
const morgan = require('morgan');
const ruta = require('./routes/routes.js');
const path = require('path');

// Instancias
const app = express();
// settings
const PORT = 2000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', config.app.port);
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ruta)



app.listen(PORT, () => {
    console.log(`Servicio levantado: http://localhost:${app.get('port')}`);
});