const { Router } = require('express');
const proveedoresController = require('../db/controller/proveedoresController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        proveedoresController.getAll()
            .then((proveedores) => {
                res.render('proveedores', { proveedores });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        proveedoresController.getOneBy(req.params.id)
            .then((proveedores) => {
                res.render('proveedores', { proveedores });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/', (req, res) => {
    try {
        proveedoresController.insert(req.body)
            .then((proveedores) => {
                res.redirect('/proveedores');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/:id', (req, res) => {
    try {
        // const id = req.params.id;
        // const objeto = req.body;
        proveedoresController.update(req.body)
            .then((proveedores) => {
            // console.log(id, objeto);
            res.redirect('/proveedores');
        })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/delete/:id', (req, res) => {
    try {
        proveedoresController.deleteBy(req.params.id)
            .then((proveedores) => {
                //console.log(req.params.id);
                res.redirect('/proveedores');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;

