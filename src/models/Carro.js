const { Model, DataTypes } = require('sequelize')

class Carro extends Model {
    static init(sequelize) {
        super.init({
            ano: DataTypes.INTEGER,
            placa: DataTypes.STRING,
            situacao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Carro;