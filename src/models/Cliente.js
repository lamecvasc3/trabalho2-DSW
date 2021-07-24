const { Model, DataTypes } = require('sequelize')

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            id_carro: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Cliente;