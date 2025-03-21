const express = require("express");
const router = express.Router();
const fonteController = require("../controllers/fonteController");

router.post('/fontes', fonteController.criarFonte);
router.get('/fontes', fonteController.listarFontes);
router.put('/fontes/:id', fonteController.atualizarFonte);
router.delete('/fontes/:id', fonteController.deletarFonte);

module.exports = router;