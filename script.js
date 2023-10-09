const mysql = require('mysql');
const prompt = require('prompt-sync')();

const mysqlConnection = mysql.createConnection({
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

function inviaRecensione() {
  const nome = prompt('Inserisci il tuo nome: ');
  const recensione = prompt('Scrivi la tua recensione: ');

  const query = 'INSERT INTO recensioni (nome, recensione) VALUES (?, ?)';
  mysqlConnection.query(query, [nome, recensione], (err, results) => {
    if (err) {
      console.error('Errore nell\'inserimento della recensione:', err);
      return;
    }
    console.log('Recensione inserita correttamente nel database!');
    mostraRecensioni();
  });
}

function mostraRecensioni() {
  const query = 'SELECT * FROM recensioni';
  mysqlConnection.query(query, (err, results) => {
    if (err) {
      console.error('Errore nel recupero delle recensioni:', err);
      return;
    }

    results.forEach((row) => {
      console.log(`Nome: ${row.nome}, Recensione: ${row.recensione}`);
    });
  });
}

inviaRecensione();