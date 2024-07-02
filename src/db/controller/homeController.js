const { query } = require('express');
const conn = require('../connection.js');

function getAll() {
    return new Promise((resolve, reject) => {
        const query = `SELECT
                        (SELECT COUNT(*) FROM juguetes) AS cantidad_total_juguetes,
                        (SELECT COUNT(*) FROM categorias) AS cantidad_total_categorias,
                        (SELECT COUNT(*) FROM proveedores) AS cantidad_total_proveedores,
                        (SELECT COUNT(*) FROM marcas) AS cantidad_total_marcas,
                        (SELECT SUM(cantidad) FROM inventario) AS total_items_inventario;`
        // console.log(query);
        conn.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll };