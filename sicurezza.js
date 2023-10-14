const mysql = require('mysql2/promise');

async function eseguiQueryParametrizzata(parametro) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Andrea99',
    database: 'databaseprogettopawm'
  });

  try {
    const [rows, fields] = await connection.execute('SELECT * FROM tabella WHERE id = ?', [parametro]);
    console.log(rows);
    return rows;

  } catch (error) {
    console.error('Errore nell\'esecuzione della query:', error);
    throw error;

  } finally {
    await connection.end();
  }
}

module.exports = {
  eseguiQueryParametrizzata
};