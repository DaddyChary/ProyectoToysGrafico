const { Router } = require('express');
const ingresosController = require('../db/controller/ingresosController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        ingresosController.getAll()
            .then((ingresos) => {
                res.render('ingresos', {  ingresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        ingresosController.getOneBy(req.params.id)
            .then((ingresos) => {
                res.render('ingresos', {  ingresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});
ruta.post('/', (req, res) => {
    try {
        ingresosController.insert(req.body)
            .then((ingresos) => {
                res.json({ message:'success', codeStatus: 200, data: ingresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.patch('/', (req, res) => {
    try {
        ingresosController.update(req.body)
            .then((ingresos) => {
                res.json({ message:'success', codeStatus: 200, data: ingresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.delete('/', (req, res) => {
    try {
        ingresosController.delete(req.body)
            .then((ingresos) => {
                res.json({ message:'success', codeStatus: 200, data: ingresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;