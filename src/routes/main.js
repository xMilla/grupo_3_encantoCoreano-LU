// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const carritoController = require('../controllers/carritoController');
const detallePcontroller = require('../controllers/detallePcontroller');
const MetodoPagoController = require('../controllers/MetodoPagoController');
const productAdd = require('../controllers/productAddController');
const registrocontroller = require('../controllers/registrocontroller');


/* GET - home page. */
router.get('/', mainController.root);

/* GET - Carrito. */
router.get('/Carrito', carritoController.root);

/* GET - Detalle de producto. */
router.get('/detalleproducto', detallePcontroller.root);

/* GET - Metodo de pago. */
router.get('/MetodoPago', MetodoPagoController.root);

/* GET - Registrat producto. */
router.get('/productAdd', productAdd.root);

/* GET - Registro. */
router.get('/registro', registrocontroller.root);




module.exports = router;
