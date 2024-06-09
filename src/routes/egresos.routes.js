const { Router } = require('express');
const egresosController = require('../db/controller/egresosController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        egresosController.getAll()
            .then((egresos) => {
                res.render('egresos', {  egresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        egresosController.getOneBy(req.params.id)
            .then((egresos) => {
                res.render('egresos', {  egresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/', (req, res) => {
    try {
        egresosController.insert(req.body)
            .then((egresos) => {
                res.json({ message: 'success', codeStatus: 200, data: egresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.patch('/', (req, res) => {
    try {
        egresosController.update(req.body)
            .then((egresos) => {
                res.json({ message: 'success', codeStatus: 200, data: egresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.delete('/', (req, res) => {
    try {
        egresosController.delete(req.body)
            .then((egresos) => {
                res.json({ message: 'success', codeStatus: 200, data: egresos });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;