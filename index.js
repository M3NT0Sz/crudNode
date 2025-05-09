const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuarioRoutes');
const contasRouter = require('./routes/conta');
const categoriaRouter = require('./routes/categoria');
const fonteRouter = require('./routes/fonte');
const movimentacoesRouter = require('./routes/movimentacoes');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', usuariosRouter);
app.use('/api', contasRouter);
app.use('/api', categoriaRouter);
app.use('/api', fonteRouter);
app.use('/api', movimentacoesRouter);

app.listen(port, () => {
    console.log('Servidor iniciado em http://localhost:'+port);
});