const { destroy } = require('../models/Funcionario');
const Funcionario = require('../models/Funcionario')

module.exports =  {
    async index(req, res) {
        const funcionario = await Funcionario.findAll();
        return res.json(funcionario)
    },
    async findById(req, res) {
        const { id } = req.params;
        const funcionario = await Funcionario.findAll({
            where: {
                id: id
            }
        });
        return res.json(funcionario)
    },
    async store(req, res) {
        const { nome, cpf } = req.body;
        const funcionario = await Funcionario.create({
            nome, cpf
        });
        return res.json(funcionario)
    },
    async delete(req, res) {
        const { id } = req.params;
        const funcionario = await Funcionario.destroy({
            where: {
                id: id
            }
        });
        return res.json(funcionario)
    },
    async update(req, res) {
        const { id, nome, cpf } = req.body;
        const funcionario = await Funcionario.update({
            nome, cpf
        }, {
            where: {
                id: id
            }
        });
        return res.json(funcionario)
    },
}