const bancoController = require('./controller/bancoController');
const express = require('express');
const app = express();
const cors = require("cors")
const multer = require("multer");

// Configura onde os arquivos serão armazenados
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });


app.use(cors())
app.use(express.json());

app.get('/', bancoController.index);
app.post('/', bancoController.create);
app.post('/executar',  upload.single("file"), bancoController.executar);

module.exports = app;