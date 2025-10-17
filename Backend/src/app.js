const express = require('express');
const app = express();
const cors = require("cors")
const { Banco } = require('./models');


app.use(cors())
app.use(express.json());
app.get('/', async (req, res) => {
    try {
        const result = await Banco.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
    }
})
app.post('/', async (req, res) => {
    try {
        const banco = await Banco.create(req.body);
        res.status(201).json(banco);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = app;