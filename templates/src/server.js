require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { serverError } = require('./middlewares/serverError');

const { createTables } = require('./database/knexSetup');
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());

// ROTAS

app.use(serverError);

app.listen(PORT, HOST, () => {
    createTables();
    console.log(`Servidor rodando em: http://${HOST}:${PORT}`);
});