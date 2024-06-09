const { Router } = require('express');
//const { Router, json } = require('express');
const categoriasController = require('../db/controller/categoriasController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        categoriasController.getAll()
            .then((categorias) => {
                res.render('categorias', {  categorias });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        categoriasController.getOneBy(req.params.id)
            .then((categorias) => {
                res.render('categorias', {  categorias });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/', (req, res) => {
    try {
        categoriasController.insert(req.body)
            .then((categorias) => {
                res.json({ message: 'success', codeStatus: 200, data: categorias });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.patch('/', (req, res) => {
    try {
        categoriasController.update(req.body)
            .then((categorias) => {
                res.json({ message: 'success', codeStatus: 200, data: categorias });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.delete('/', (req, res) => {
    try {
        categoriasController.deleteBy(req.body.id)
            .then((categorias) => {
                res.json({ message: 'success', codeStatus: 200, data: categorias });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});


module.exports = ruta;