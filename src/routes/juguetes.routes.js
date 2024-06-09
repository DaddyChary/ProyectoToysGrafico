const { Router } = require('express');
const juguetesController = require('../db/controller/juguetesController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        juguetesController.getAll()
            .then((juguetes) => {
                res.render('juguetes', {  juguetes });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        juguetesController.getOneBy(req.params.id)
            .then((juguetes) => {
                res.render('juguetes', {  juguetes });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/', (req, res) => {
    try {
        juguetesController.insert(req.body)
            .then((juguetes) => {
                res.json({ message: 'success', codeStatus: 200, data: juguetes });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.patch('/', (req, res) => {
    try {
        juguetesController.update(req.body)
            .then((juguetes) => {
                res.json({ message: 'success', codeStatus: 200, data: juguetes });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.delete('/', (req, res) => {
    try {
        juguetesController.delete(req.body)
            .then((juguetes) => {
                res.json({ message: 'success', codeStatus: 200, data: juguetes });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;
