

const express = require('express');
const routes = express.Router();

const ProductController = require('../controller/ProductController');



routes.get('/',ProductController.getAllProduct);
routes.post('/', ProductController.saveProduct);
routes.patch('/',ProductController.updateProduct)




module.exports = routes;