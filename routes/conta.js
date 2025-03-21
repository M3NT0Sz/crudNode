const express = require("express");
const router = express.Router();
const contaController = require("../controllers/contaController");

router.post('/contas', contaController.criarConta);
router.get('/contas', contaController.listarContas);
router.put('/contas/:id', contaController.atualizarConta);
router.delete('/contas/:id', contaController.deletarConta);

module.exports = router;