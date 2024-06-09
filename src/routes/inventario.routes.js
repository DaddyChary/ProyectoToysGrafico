const { Router } = require('express');
const inventarioController = require('../db/controller/inventarioController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        inventarioController.getAll()
            .then((inventario) => {
                res.render('inventario', {  inventario });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        inventarioController.getOneBy(req.params.id)
            .then((inventario) => {
                res.render('inventario', {  inventario });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/', (req, res) => {
    try {
        inventarioController.insert(req.body)
            .then((inventario) => {
                res.json({ message: 'success', codeStatus: 200, data: inventario });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.patch('/', (req, res) => {
    try {
        inventarioController.update(req.body)
            .then((inventario) => {
                res.json({ message: 'success', codeStatus: 200, data: inventario });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.delete('/', (req, res) => {
    try {
        inventarioController.delete(req.body)
            .then((inventario) => {
                res.json({ message: 'success', codeStatus: 200, data: inventario });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;