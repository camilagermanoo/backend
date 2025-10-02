const tarefaModel = require("../models/tarefaModel")

// GET /tarefas
function listar(req, res) {
  const resultado = tarefaModel.listar()
  res.status(200).json(resultado)
}

// GET /tarefas/:tarefaId
function buscarPeloId(req, res) {
  const { tarefaId } = req.params
  const resultado = tarefaModel.buscarPeloId(tarefaId)

  if (resultado) {
    res.json(resultado)
  } else {
    res.status(404).json({ msg: "Tarefa não encontrada" })
  }
}

// POST /tarefas
function criar(req, res) {
  const { nome, concluida } = req.body
  const resultado = tarefaModel.criar({ nome, concluida })
  res.status(201).json(resultado)
}

// PUT /tarefas/:tarefaId
function atualizar(req, res) {
  const { tarefaId } = req.params
  const { nome, concluida } = req.body

  const resultado = tarefaModel.atualizar({
    id: tarefaId,
    nome,
    concluida,
  })

  if (resultado) {
    res.json(resultado);
  } else {
    res.status(404).json({ msg: "Tarefa não encontrada" })
  }
}

// DELETE /tarefas/:tarefaId
function remover(req, res) {
  const { tarefaId } = req.params
  const resultado = tarefaModel.remover(tarefaId)

  if (resultado) {
    res.status(204).send()
  } else {
    res.status(404).json({ msg: "Tarefa não encontrada" })
  }
}

module.exports = {listar, buscarPeloId, criar, atualizar, remover}
