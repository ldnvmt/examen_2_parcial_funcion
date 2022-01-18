const connection = require("express-myconnection");
const controller = {};


controller.cedula_cliente = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cedula_cliente set ?', [data], (err, clientes) =>{
            res.redirect('/principaldocente.html');
        });
    })
};

controller.nombre_cliente = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO nombre_cliente set ?', [data], (err, clientes) =>{
            res.redirect('/principaldocente.html');
        });
    })
};

controller.direccion_cliente = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO direccion_cliente set ?', [data], (err, clientes) =>{
            res.redirect('/principaldocente.html');
        });
    })
};

controller.telefono_cliente = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO telefono_cliente set ?', [data], (err, clientes) =>{
            res.redirect('/principaldocente.html');
        });
    })
};

controller.email_cliente = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO email_cliente set ?', [data], (err, clientes) =>{
            res.redirect('/principaldocente.html');
        });
    })
};

module.exports = controller;