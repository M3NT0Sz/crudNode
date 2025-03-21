const express = require("express");
const router = express.Router();
const movimentacoesController = require("../controllers/movimentacoesController");

router.post('/movimentacoes', movimentacoesController.criarMovimentacao);
router.get('/movimentacoes', movimentacoesController.listarMovimentacoes);
router.put('/movimentacoes/:id', movimentacoesController.atualizarMovimentacao);
router.delete('/movimentacoes/:id', movimentacoesController.deletarMovimentacao);

module.exports = router;