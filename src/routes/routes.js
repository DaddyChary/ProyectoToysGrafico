const { Router } = require('express');
const ruta = Router();
const homeController = require('../db/controller/homeController.js');
const categoriasRoutes = require('./categorias.routes');
const marcasRoutes = require('./marcas.routes');
const proveedoresRoutes = require('./proveedores.routes');
const juguetesRoutes = require('./juguetes.routes');
const inventarioRoutes = require('./inventario.routes');

const authMiddelware = (req, res, next) => {
    
    const auth = { login: 'admin', password: 'admin'};

    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password === auth.login && password === auth.password) {
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).render('denegado', { mensaje: 'Acceso no autorizado' });
};

ruta.use((req, res, next) => {

    if (req.path) {
        return authMiddelware(req, res, next);
    }
    next();
});

ruta.get('/', async (req, res) => {
    try {
        const datos = await homeController.getAll(); // Espera a que se resuelva la promesa de getAll()
        const titulo = "Bienvenido al inicio";
        res.render('home', { titulo, datos }); // Pasar los datos obtenidos a la plantilla 'home'
    } catch (err) {
        console.error(err.stack);
        res.status(500).render('500', { titulo: "Error del servidor" });
    }
});

ruta.get('/about', (req, res) => {
    try {
        const titulo = "About";
        res.render('about', { titulo });
    } catch (err) {
        console.error(err.stack);
        res.status(500).render('500', { titulo: "Error del servidor" });
    }
});

ruta.use('/inventario', inventarioRoutes);
ruta.use('/juguetes', juguetesRoutes);
ruta.use('/proveedores', proveedoresRoutes);
ruta.use('/categorias', categoriasRoutes);
ruta.use('/marcas', marcasRoutes);




// ruta.get('/', (req, res) => {
//     const titulo = "Bienvenido al inicio"
//     res.render('home', { titulo });
// });

// ruta.get('/about', (req, res) => {
//     const titulo = "About"
//     res.render('about', {titulo});
// });

module.exports = ruta;


