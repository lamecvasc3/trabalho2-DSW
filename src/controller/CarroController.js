const Carro = require('../models/Carro')

module.exports =  {
    async index(req, res) {
        const carro = await Carro.findAll();
        return res.json(carro)
    },
    async findById(req, res) {
        const { id } = req.params;
        const carro = await Carro.findAll({
            where: {
                id: id
            }
        });
        return res.json(carro)
    },
    async store(req, res) {
        const { ano, placa, situacao } = req.body;
        const carro = await Carro.create({
            ano, placa, situacao
        });
        return res.json(carro)
    },
    async delete(req, res) {
        const { id } = req.params;
        const carro = await Carro.destroy({
            where: {
                id: id
            }
        });
        return res.json(carro)
    },
    async update(req, res) {
        const { id, ano, placa, situacao } = req.body;
        const carro = await Carro.update({
            ano, placa, situacao
        }, {
            where: {
                id: id
            }
        });
        return res.json(carro)
    },
}