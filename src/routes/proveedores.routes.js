const { Router } = require('express');
const proveedoresController = require('../db/controller/proveedoresController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        proveedoresController.getAll()
            .then((proveedores) => {
                res.render('proveedores', {  proveedores });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        proveedoresController.getOneBy(req.params.id)
            .then((proveedores) => {
                res.render('proveedores', {  proveedores });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/', (req, res) => {
    try {
        proveedoresController.insert(req.body)
            .then((proveedores) => {
                res.json({ message: 'success', codeStatus: 200, data: proveedores });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.patch('/', (req, res) => {
    try {
        proveedoresController.update(req.body)
            .then((proveedores) => {
                res.json({ message: 'success', codeStatus: 200, data: proveedores });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.delete('/', (req, res) => {
    try {
        proveedoresController.delete(req.body)
            .then((proveedores) => {
                res.json({ message: 'success', codeStatus: 200, data: proveedores });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;

