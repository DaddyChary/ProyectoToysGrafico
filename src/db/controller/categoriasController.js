const { query } = require('express');
const conn = require('../connection.js');

const TABLA = "categorias";

function getAll() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA}`
        // console.log(query);
        conn.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOneBy(id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id =${ id }`
        conn.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function insert(data) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} SET?`;
        // console.log(query, data); // Imprime la consulta y los datos antes de ejecutarla
        conn.query(query, data, (error, result) => {
            return error? reject(error) : resolve(result);
        })
    });
}

function update(data) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET? WHERE id =?`;
        // console.log(query, data); // Imprime la consulta y los datos antes de ejecutarla
        conn.query(query, [data, data.id], (error, result) => {
            return error? reject(error) : resolve(result);
        })
    });
}

function deleteBy(id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id =?`;
        console.log(query, id); // Imprime la consulta y los datos antes de ejecutarla
        conn.query(query, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll, getOneBy, insert, deleteBy, update};