const express = require("express")
require('dotenv').config();

const PORT = process.env.PORT
const app = express()

app.post("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server on, port: ${PORT} `)
})