const Aluguel = require('../models/Aluguel')

module.exports =  {
    async index(req, res) {
        const aluguel = await Aluguel.findAll();
        return res.json(aluguel)
    },
    async findById(req, res) {
        const { id } = req.params;
        const aluguel = await Aluguel.findAll({
            where: {
                id: id
            }
        });
        return res.json(aluguel)
    },
    async store(req, res) {
        const { id_carro, id_funcionario, id_cliente } = req.body;
        const aluguel = await Aluguel.create({
                id_carro, id_funcionario, id_cliente
        });
        return res.json(aluguel)
    },
    async delete(req, res) {
        const { id } = req.params;
        const aluguel = await Aluguel.destroy({
            where: {
                id: id
            }
        });
        return res.json(aluguel)
    },
    async update(req, res) {
        const { id, id_carro, id_funcionario, id_cliente } = req.body;
        const aluguel = await Aluguel.update({
                id_carro, id_funcionario, id_cliente
        }, {
            where: {
                id: id
            }
        });
        return res.json(aluguel)
    },
}