const { Router } = require('express');
const marcasController = require('../db/controller/marcasController.js');
const ruta = Router();

ruta.get('/', (req, res) => {
    try {
        marcasController.getAll()
            .then((marcas) => {
                res.render('marcas', { marcas });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.get('/:id', (req, res) => {
    try {
        marcasController.getOneBy(req.params.id)
            .then((marcas) => {
                res.render('marcas', {  marcas });
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/', (req, res) => {
    try {
        marcasController.insert(req.body)
            .then((marcas) => {
                res.redirect('/marcas');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/:id', (req, res) => {
    try {
        marcasController.update(req.body)
            .then((marcas) => {
                res.redirect('/marcas');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/delete/:id', (req, res) => {
    try {
        marcasController.deleteBy(req.params.id)
            .then((marcas) => {
                res.redirect('/marcas');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});


module.exports = ruta;