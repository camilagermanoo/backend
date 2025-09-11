// 1. importar o framework
const express = require("express");

// Importar middleware de terceiros
const cors = require("cors")

const router = require("./router")

// 2. criar uma instância da aplicação
const app = express();

// Middleware embutido ou integrado
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Middleware de terceiros
app.use(cors())

// Middleware de aplicação
app.use((req, res, next) => {
    console.log("Passei pelo middleware de app")
    next()
})

app.use('/tarefas', router)

// criar um middleware de roteamento
app.get('/', (req, res) => {
    res.send("Olá")
})

// middleware de erro
app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

// 3. iniciar a aplicação em uma porta
app.listen(3000, () => {
    console.log("A aplicação está ON!")
})
