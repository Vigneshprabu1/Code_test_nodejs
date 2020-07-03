

const express = require('express');
const routes = express.Router();

const LoginController = require('../controller/LoginController');
const login = require('../service/LoginService');

routes.post('/',LoginController.login);
routes.get('/',login.verifyToken,LoginController.checkSession);
routes.get('/user',LoginController.getAllUser);
routes.post('/save',LoginController.saveUser);
routes.patch('/',LoginController.updateUser);

module.exports = routes;