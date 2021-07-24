const { Model, DataTypes } = require('sequelize')

class Aluguel extends Model {
    static init(sequelize) {
        super.init({
            id_carro: DataTypes.INTEGER,
            id_funcionario: DataTypes.INTEGER,
            id_cliente: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Aluguel;