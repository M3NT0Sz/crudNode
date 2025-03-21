const contasService = require('../services/orcamentoServices');

async function criarConta(req, res){
    try {
        const {nome, descricao} = req.body;
        if(await contasService.criarConta(nome, descricao)){
            res.status(201).json({mensagem : "Registro inserido!"});
        } else {
            res.status(500).json({erro : "Erro ao inserir conta!"});
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao inserir conta!"});
    }
}

async function listarContas(req, res){
    try {
        const retorno = await contasService.listarContas();
        if(!retorno){
            res.status(500).json({erro: "Erro ao listar contas!"});
        } else{
            res.json(retorno);
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao listar contas!"});
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

async function atualizarConta(req, res) {
    try{
        const { id } = req.params;
        const { nome, descricao } = req.body;
        if (await contasService.atualizarConta(id, nome, descricao)){
            res.status(201).json({mensagem: "Registro alterado!"});
        } else {
            res.status(500).json({erro: "Erro ao atualizar conta!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao atualizar conta!"});
    }
}

async function deletarConta(req, res) {
    try{
        const { id } = req.params;
        if (await contasService.deletarConta(id)){
            res.status(201).json({mensagem: "Registro excluído!"});
        } else {
            res.status(500).json({erro: "Erro ao excluir conta!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao excluir conta!"});
    }
}

module.exports = {
    criarConta, listarContas, atualizarConta, deletarConta
}