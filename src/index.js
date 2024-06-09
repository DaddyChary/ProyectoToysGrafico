// Imports 
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
app.use(morgan("dev"));
app.use(express.json());
app.use(ruta)


app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto http://localhost:${PORT}`);
});