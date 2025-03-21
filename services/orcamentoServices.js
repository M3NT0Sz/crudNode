const conexao = require('../db');

async function criarConta(nome, descricao) {
    const sql = "INSERT INTO contas (nome, descricao) VALUES (?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, descricao]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarContas() {
    const sql = "SELECT * FROM contas";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarConta(id, nome, descricao) {
    const sql = "UPDATE contas SET nome = ?, descricao = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, descricao, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarConta(id) {
    const sql = "DELETE FROM contas WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function criarCategoria(nome, descricao) {
    const sql = "INSERT INTO categorias_despesas (nome, descricao) VALUES (?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, descricao]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarCategorias() {
    const sql = "SELECT * FROM categorias_despesas";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarCategoria(id, nome, descricao) {
    const sql = "UPDATE categorias_despesas SET nome = ?, descricao = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, descricao, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarCategoria(id) {
    const sql = "DELETE FROM categorias_despesas WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function criarFonte(nome, descricao) {
    const sql = "INSERT INTO fontes_renda (nome, descricao) VALUES (?, ?)";
    try {
        const [res] = await conexao.query(sql, [nome, descricao]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarFontes() {
    const sql = "SELECT * FROM fontes_renda";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarFonte(id, nome, descricao) {
    const sql = "UPDATE fontes_renda SET nome = ?, descricao = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [nome, descricao, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarFonte(id) {
    const sql = "DELETE FROM fontes_renda WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function criarMovimentacao(tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao) {
    const sql = "INSERT INTO movimentacoes (tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao) VALUES (?, ?, ?, ?, ?, ?, ?)";
    try {
        const [res] = await conexao.query(sql, [tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao]);
        return true;
    } catch (err) {
        return false;
    }
}

async function listarMovimentacoes() {
    const sql = "SELECT * FROM movimentacoes";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function atualizarMovimentacao(id, tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao) {
    const sql = "UPDATE movimentacoes SET tipo = ?, valor = ?, data_movimentacao = ?, conta_id = ?, categoria_despesa_id = ?, fonte_renda_id = ?, descricao = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [tipo, valor, data_movimentacao, conta_id, categoria_despesa_id, fonte_renda_id, descricao, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deletarMovimentacao(id) {
    const sql = "DELETE FROM movimentacoes WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = {
    criarConta, listarContas, atualizarConta, deletarConta,
    criarCategoria, listarCategorias, atualizarCategoria, deletarCategoria,
    criarFonte, listarFontes, atualizarFonte, deletarFonte,
    criarMovimentacao, listarMovimentacoes, atualizarMovimentacao, deletarMovimentacao
};