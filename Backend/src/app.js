const express = require('express');
const app = express();
const cors = require("cors")
const BancoController = require('./controllers/BancoController');
const ExecutarController = require('./controllers/ExecutarController');


app.use(cors())
app.use(express.json());
app.get('/', () => BancoController.index)
app.post('/', () => BancoController.create);
app.post('/executar', () => ExecutarController.create)

module.exports = app;