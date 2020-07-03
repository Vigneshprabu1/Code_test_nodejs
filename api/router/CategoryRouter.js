const express = require('express');
const routes = express.Router();

const CategoryController = require('../controller/CategoryController');



routes.get('/',CategoryController.getAllCategory);
routes.post('/', CategoryController.saveCategory);
routes.patch('/',CategoryController.updateCategory);




module.exports = routes;