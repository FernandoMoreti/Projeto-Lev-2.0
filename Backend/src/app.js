const bancoController = require('./controller/bancoController');
const express = require('express');
const app = express();
const cors = require("cors")



app.use(cors())
app.use(express.json());

app.get('/', bancoController.index);
app.post('/', bancoController.create);
app.post('/executar', bancoController.executar);

module.exports = app;