const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Aluguel = require('../models/Aluguel')
const Carro = require('../models/Carro')
const Cliente = require('../models/Cliente')
const Funcionario = require('../models/Funcionario')

const connection = new Sequelize(dbConfig)

Carro.init(connection)
Cliente.init(connection)
Funcionario.init(connection)
Aluguel.init(connection)


module.exports = connection