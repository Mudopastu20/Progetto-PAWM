const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  
  password: 'Andrea99',  
  database: 'databaseprogettopawm'  
});

const query = 'SELECT * FROM prenotazioni';
connection.query(query, (error, results, fields) => {
  if (error) {
    console.error('Errore nella query:', error);
    return;
  }

  // Processa i risultati della query
  console.log('Risultati della query:', results);
});

// Chiudi la connessione quando hai finito di usare il database
connection.end();