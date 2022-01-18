
const express = require('express');
const router = express.Router();

const customerController = require('controller/customerController');

//Raiz del Servidor
router.get('/',(req, res) => {
    res.render('Inicio')
})


router.post('/cedula_cliente', customerController.cedula_cliente);
router.post('/nombre_cliente', customerController.nombre_cliente);
router.post('/direccion_cliente', customerController.direccion_cliente);
router.post('/email_cliente', customerController.email_cliente);


module.exports = router;