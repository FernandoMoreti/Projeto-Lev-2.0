const { Banco } = require("../models");

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
}

module.exports = new BancoController