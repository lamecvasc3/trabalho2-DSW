const Cliente = require('../models/Cliente')

module.exports =  {
    async index(req, res) {
        const cliente = await Cliente.findAll();
        return res.json(cliente)
    },
    async findById(req, res) {
        const { id } = req.params;
        const cliente = await Cliente.findAll({
            where: {
                id: id
            }
        });
        return res.json(cliente)
    },
    async store(req, res) {
        const { nome, cpf, id_carro } = req.body;
        const cliente = await Cliente.create({
            nome, cpf, id_carro
        });
        return res.json(cliente)
    },
    async delete(req, res) {
        const { id } = req.params;
        const cliente = await Cliente.destroy({
            where: {
                id: id
            }
        });
        return res.json(cliente)
    },
    async update(req, res) {
        const { id, nome, cpf, id_carro } = req.body;
        const cliente = await Cliente.update({
            nome, cpf, id_carro
        }, {
            where: {
                id: id
            }
        });
        return res.json(cliente)
    },
}