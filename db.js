const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  
  password: 'Andrea99',  
  database: 'databaseprogettopawm'  
});

mysqlConnection.connect((err) => {
    if (err) {
      console.error('Errore nella connessione al database:', err);
      return;
    }
    console.log('Connessione al database MySQL avvenuta con successo!');
  });
  
  module.exports = mysqlConnection;