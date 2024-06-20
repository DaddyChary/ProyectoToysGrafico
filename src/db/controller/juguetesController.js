const conn = require('../connection.js');

const TABLA = "juguetes";

function getAll() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getAllFilter() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT 
                    proveedores.nombre AS nombre_proveedor,
                    categorias.nombre AS nombre_categoria,
                    marcas.nombre AS nombre_marca,
                    juguetes.*
                    FROM 
                        juguetes
                    JOIN 
                        proveedores ON juguetes.id_proveedor_fk = proveedores.id
                    JOIN 
                        categorias ON juguetes.id_categoria_fk = categorias.id
                    JOIN 
                        marcas ON juguetes.id_marca_fk = marcas.id;`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOneBy(id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id =${id}`
        conn.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function insert(data) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} SET?`;
        conn.query(query, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function update(data) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET? WHERE id =?`;
        conn.query(query, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function deleteBy(id) {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM ${TABLA} WHERE id =?`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll, getOneBy, insert, deleteBy, update, getAllFilter };

