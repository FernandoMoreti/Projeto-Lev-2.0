const { Banco } = require("../models");

class ExecutarController {
    async create(req, res) {
        const { banco } = req.body
        try {
            const result = await Banco.findOne({ where: { name: banco } });
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new ExecutarController