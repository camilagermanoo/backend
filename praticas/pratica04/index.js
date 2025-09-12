const express = require('express');

const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
]

const app = express()
const router = express.Router()

app.use(express.json())
app.use('/tarefas', router)

// Middleware de aplicação
app.use((req, res, next) => {
    console.log("Middleware de aplicação")
    next()
})

// Middleware de roteamento
router.get('/', (req, res) => {
    res.send(tarefas)
})

router.get('/:tarefaId', (req, res) => {
    const tarefaEncontrada = tarefas.find(item => item.id == req.params.tarefaId)
    res.send(tarefaEncontrada)
})

router.post('/', (req, res) => {
    const { nome, concluida } = req.body

    const novaTarefa = { id: tarefas.length +1, ...req.body}
    tarefas.push(novaTarefa)
    res.status(201).json(novaTarefa)
})

router.put('/:tarefaId', (req, res) => {
    const { tarefaId } = req.params;
    const { nome, concluida } = req.body;

    const tarefa = tarefas.find(item => item.id == tarefaId);

    if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    if (nome !== undefined) tarefa.nome = nome;
    if (concluida !== undefined) tarefa.concluida = concluida;

    res.json(tarefa);
})

router.delete('/.tarefaId', (req, res) => {
    const { tarefaId } = req.params
    
    const indexArray = tarefas.findIndex(item => item.id === tarefaId)

    if (index === -1) {
        return res.status(404).json({mensagem: "Tarefa não encontrada"})
    }

    tarefas.slice(index, 1)

    res.status(204).send()
})

// Middleware de erro
app.use((err, res, req, next) => {
    res.status(500).send(err.message)
})


router.get('/:tarefaId', (req, res, next) => {
    const tarefaEncontrada = tarefas.find(item => item.id == req.params.tarefaId)

    if (!tarefaEncontrada) {
        return next(new Error("Tarefa não localizada"))
    }

    res.json(tarefaEncontrada);
})

router.put('/:tarefaId', (req, res, next) => {
    const { tarefaId } = req.params
    const { nome, concluida } = req.body

    const tarefa = tarefas.find(item => item.id == tarefaId)

    if (!tarefa) {
        return next(new Error("Tarefa não localizada"))
    }

    if (nome !== undefined) tarefa.nome = nome;
    if (concluida !== undefined) tarefa.concluida = concluida

    res.json(tarefa);
})

router.delete('/:tarefaId', (req, res, next) => {
    const { tarefaId } = req.params

    const index = tarefas.findIndex(item => item.id == tarefaId)

    if (index === -1) {
        return next(new Error("Tarefa não localizada"))
    }

    tarefas.splice(index, 1)
    res.status(204).send()
})



app.listen(3005, () => {
    console.log("Aplicação on")
})

module.exports = app;
