const fontesService = require('../services/orcamentoServices');

async function criarFonte(req, res){
    try {
        const {nome, descricao} = req.body;
        if(await fontesService.criarFonte(nome, descricao)){
            res.status(201).json({mensagem : "Registro inserido!"});
        } else {
            res.status(500).json({erro : "Erro ao inserir fonte!"});
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao inserir fonte!"});
    }
}

async function listarFontes(req, res){
    try {
        const retorno = await fontesService.listarFontes();
        if(!retorno){
            res.status(500).json({erro: "Erro ao listar fontes!"});
        } else{
            res.json(retorno);
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao listar fontes!"});
    }
}

// async function listarUsuarioId(req, res) {
//     try {
//         const { id } = req.params;
//         const retorno = await usuarioService.listarUsuarioId(id);
//         if(!retorno){
//             res.status(500).json({erro: "Erro ao buscar usuário!"});
//         } else {
//             res.json(retorno);
//         }
//     } catch (err){
//         res.status(500).json({erro: "Erro ao buscar usuário!"});
//     }
// }

async function atualizarFonte(req, res) {
    try{
        const { id } = req.params;
        const { nome, descricao } = req.body;
        if (await fontesService.atualizarFonte(id, nome, descricao)){
            res.status(201).json({mensagem: "Registro alterado!"});
        } else {
            res.status(500).json({erro: "Erro ao atualizar fonte!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao atualizar fonte!"});
    }
}

async function deletarFonte(req, res) {
    try{
        const { id } = req.params;
        if (await fontesService.deletarFonte(id)){
            res.status(201).json({mensagem: "Registro excluído!"});
        } else {
            res.status(500).json({erro: "Erro ao excluir fonte!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao excluir fonte!"});
    }
}

module.exports = {
    criarFonte, listarFontes, atualizarFonte, deletarFonte
}