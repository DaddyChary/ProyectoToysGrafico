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

// ruta.get('/', (req, res) => {
//     try {
//         juguetesController.getAllFilter()
//             .then((juguetes) => {
//                 res.render('juguetes', {  juguetes });
//             })
//     } catch (error) {
//         res.json({ message: 'error', codeStatus: 500, data: error });
//     }
// });

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
                res.redirect('/juguetes');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/:id', (req, res) => {
    try {
        juguetesController.update(req.body)
            .then((juguetes) => {
                res.redirect('/juguetes');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

ruta.post('/delete/:id', (req, res) => {
    try {
        juguetesController.deleteBy(req.params.id)
            .then((juguetes) => {
                res.redirect('/juguetes');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;
