const { Model, DataTypes } = require('sequelize')

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Funcionario;