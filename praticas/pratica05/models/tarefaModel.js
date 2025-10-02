const tarefas = []

// GET todas
function listar() {
  return tarefas
}

// GET por ID
function buscarPeloId(tarefaId) {
  return tarefas.find((t) => t.id === tarefaId) || null
}

// POST criar
function criar(tarefa) {
  const novaTarefa = {
    id: Math.random().toString(36).substr(2, 4), 
    ...tarefa,
  };
  tarefas.push(novaTarefa)
  return novaTarefa
}

// PUT atualizar
function atualizar(tarefa) {
  const index = tarefas.findIndex((t) => t.id === tarefa.id)
  if (index === -1) return null

  tarefas[index] = { ...tarefas[index], ...tarefa }
  return tarefas[index]
}

// DELETE remover
function remover(tarefaId) {
  const index = tarefas.findIndex((t) => t.id === tarefaId)
  if (index === -1) return null

  const removida = tarefas[index]
  tarefas.splice(index, 1)
  return removida
}

module.exports = {listar, buscarPeloId, criar, atualizar, remover}
