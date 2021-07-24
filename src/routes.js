const express = require('express');
const AluguelController = require('./controller/AluguelController');
const CarroController = require('./controller/CarroController');
const ClienteController = require('./controller/ClienteController');
const FuncionarioController = require('./controller/FuncionarioController');

const routes = express.Router();

routes.get('/', (req, res) =>{
    res.send('Desenvolvimento de software para web')
})

routes.get('/carro', CarroController.index)
routes.get('/funcionario', FuncionarioController.index)
routes.get('/cliente', ClienteController.index)
routes.get('/aluguel', AluguelController.index)
 
routes.get('/carro/:id', CarroController.findById)
routes.get('/funcionario/:id', FuncionarioController.findById)
routes.get('/cliente/:id', ClienteController.findById)
routes.get('/aluguel/:id', AluguelController.findById)

routes.post('/carro', CarroController.store)
routes.post('/funcionario', FuncionarioController.store)
routes.post('/cliente', ClienteController.store)
routes.post('/aluguel', AluguelController.store)

routes.delete('/carro/:id', CarroController.delete)
routes.delete('/funcionario/:id', FuncionarioController.delete)
routes.delete('/cliente/:id', ClienteController.delete)
routes.delete('/aluguel/:id', AluguelController.delete)

routes.put('/carro', CarroController.update)
routes.put('/funcionario', FuncionarioController.update)
routes.put('/cliente', ClienteController.update)
routes.put('/aluguel', AluguelController.update)






module.exports = routes