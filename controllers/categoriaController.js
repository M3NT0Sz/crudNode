const categoriasService = require('../services/orcamentoServices');

async function criarCategoria(req, res){
    try {
        const {nome, descricao} = req.body;
        if(await categoriasService.criarCategoria(nome, descricao)){
            res.status(201).json({mensagem : "Registro inserido!"});
        } else {
            res.status(500).json({erro : "Erro ao inserir categoria!"});
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao inserir categoria!"});
    }
}

async function listarCategorias(req, res){
    try {
        const retorno = await categoriasService.listarCategorias();
        if(!retorno){
            res.status(500).json({erro: "Erro ao listar categorias!"});
        } else{
            res.json(retorno);
        }
    } catch (err){
        return res.status(500).json({erro: "Erro ao listar categorias!"});
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

async function atualizarCategoria(req, res) {
    try{
        const { id } = req.params;
        const { nome, descricao } = req.body;
        if (await categoriasService.atualizarCategoria(id, nome, descricao)){
            res.status(201).json({mensagem: "Registro alterado!"});
        } else {
            res.status(500).json({erro: "Erro ao atualizar categoria!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao atualizar categoria!"});
    }
}

async function deletarCategoria(req, res) {
    try{
        const { id } = req.params;
        if (await categoriasService.deletarCategoria(id)){
            res.status(201).json({mensagem: "Registro excluído!"});
        } else {
            res.status(500).json({erro: "Erro ao excluir categoria!"});
        }
    }catch (err){
        res.status(500).json({erro: "Erro ao excluir categoria!"});
    }
}

module.exports = {
    criarCategoria, listarCategorias, atualizarCategoria, deletarCategoria
}