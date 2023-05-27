const mysql = require('mysql');
const {MYSQL_CONFIG} = require('../config/db.js');

const connection = mysql.createConnection(MYSQL_CONFIG);

connection.connect();

function exeSQL(sql){
    return new Promise((resolve,reject) => {
        connection.query(sql,(error,data) => {
            if(error){
                reject(error);
                return;
            }
            resolve(data);
        })
    })
}

module.exports = {exeSQL};