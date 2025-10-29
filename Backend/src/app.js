const express = require('express');
const app = express();
const cors = require("cors")
const bancoController = require('./controller/bancoController');



app.use(cors())
app.use(express.json());

app.get('/', bancoController.index);
app.post('/', bancoController.create);
app.post('/executar', bancoController.executar);

module.exports = app;