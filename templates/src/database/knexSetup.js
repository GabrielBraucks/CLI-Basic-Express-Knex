const knex = require('knex');
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './database.sqlite'
    },
    useNullAsDefault: true
});

async function createTables() {
    try {
        // Cliente table
        // if (!(await db.schema.hasTable('Cliente'))) {
        //     await db.schema.createTable('Cliente', table => {
        //         table.integer('id').primary();
        //         table.string('cpf', 45).unique();
        //         table.string('email', 45).unique();
        //         table.string('nome', 45);
        //         table.string('telefone', 45);
        //         table.string('senha', 45);
        //         table.integer('tipo').notNullable().defaultTo(0);
        //     });
        // }

        console.log('Tabelas verificadas/criadas com sucesso!');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    }
}

module.exports = { db, createTables };