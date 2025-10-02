const express = require("express")
const tarefaRouter = require("./routes/tarefaRouter")

const app = express()

// permite receber JSON no body
app.use(express.json())

// usa o router para a rota /tarefas
app.use("/tarefas", tarefaRouter)

module.exports = app
