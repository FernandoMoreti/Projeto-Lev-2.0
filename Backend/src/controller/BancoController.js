const { Banco } = require("../models");
const BancoRepository = require("../repository/BancoRepository");

class BancoController {
    async index(req, res) {
        try {
            const result = await Banco.findAll()
            res.status(200).json(result)
        } catch (error) {
            console.error(error)
        }
    }

    async create(req, res) {
        try {
            const banco = await Banco.create(req.body);
            res.status(201).json(banco);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async executar (req, res) {
        const file = req.file;
        const banco = req.body.banco;

        
        try {
            const bancoResult = await Banco.findOne({ where: { nome: banco } });
            console.log(" Retorno: " + bancoResult)
            const newExcel = await BancoRepository.executar(bancoResult.dataValues, file);
            res.status(200).json({ message: 'Execução bem-sucedida' });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new BancoController();