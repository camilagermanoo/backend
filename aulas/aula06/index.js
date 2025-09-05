// 1. importar o framework
const express = require("express");

// 2. criar uma instância da aplicação
const app = express();

// criar middleware
app.get('/', (req, res) => {
    res.send("Olá")
})

// 3. iniciar a aplicação
app.listen(3000, () => {
    console.log("A aplicação está ON!")
})
