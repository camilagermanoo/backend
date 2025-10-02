const express = require("express");
const router = express.Router();

// importa todas as funções do controller
const tarefaController = require("../controllers/tarefaController");

// rotas -> cada uma chama um método do controller
router.get("/", tarefaController.listar);
router.get("/:tarefaId", tarefaController.buscarPeloId);
router.post("/", tarefaController.criar);
router.put("/:tarefaId", tarefaController.atualizar);
router.delete("/:tarefaId", tarefaController.remover);

module.exports = router;
