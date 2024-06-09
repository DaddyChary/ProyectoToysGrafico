const conn = require('../connection.js');

const TABLA = "juguetes";

function getAll() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA}`, (error, result) => {
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
            return error? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll, getOneBy, insert, deleteBy, update };

