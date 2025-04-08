function serverError(err, req, res, next) {
    console.log('---------ERRO---------');
    
    console.error(err.stack);

    console.log('----------------------');
    res.status(500).json({ error: 'Erro interno do servidor' });
}

module.exports = { serverError };