const movimentacoesService = require('../services/orcamentoServices');

async function criarMovimentacao(req, res){
    try {
        const {tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao} = req.body;
        if(await movimentacoesService.criarMovimentacao(tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao)){
            res.status(201).json({mensagem : "Registro inserido!"});
        } else {
            res.status(500).json({erro : "Erro ao inserir movimentação!"});
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao inserir movimentação!"});
    }
}

async function listarMovimentacoes(req, res){
    try {
        const retorno = await movimentacoesService.listarMovimentacoes();
        if(!retorno){
            res.status(500).json({erro: "Erro ao listar movimentações!"});
        } else{
            res.json(retorno);
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao listar movimentações!"});
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

async function atualizarMovimentacao(req, res) {
    try{
        const { id } = req.params;
        const { tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao } = req.body;
        if (await movimentacoesService.atualizarMovimentacao(id, tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao)){
            res.status(201).json({mensagem: "Registro alterado!"});
        } else {
            res.status(500).json({erro: "Erro ao atualizar movimentação!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao atualizar movimentação!"});
    }
}

async function deletarMovimentacao(req, res) {
    try{
        const { id } = req.params;
        if (await movimentacoesService.deletarMovimentacao(id)){
            res.status(201).json({mensagem: "Registro excluído!"});
        } else {
            res.status(500).json({erro: "Erro ao excluir movimentação!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao excluir movimentação!"});
    }
}

module.exports = {
    criarMovimentacao, listarMovimentacoes, atualizarMovimentacao, deletarMovimentacao
}