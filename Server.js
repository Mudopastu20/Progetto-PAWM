const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: 'Andrea99',  
    database: 'databaseprogettopawm'
});



mysqlConnection.connect((err) => {
    if (err) {
      console.error('Errore nella connessione al database:', err);
    } else {
      console.log('Connessione al database MySQL riuscita!');
    }
  });
  
  app.use(express.json());
  app.use(cors({
    origin: 'http://localhost:3000',  
  }));
  
  app.post('/recensioni', (req, res) => {
    const { nome, recensione } = req.body;
    const query = 'INSERT INTO recensioni (nome, recensione) VALUES (?, ?)';
    mysqlConnection.query(query, [nome, recensione], (err, results) => {
      if (err) {
        console.error('Errore nell\'inserimento della recensione:', err);
        res.status(500).json({ error: 'Errore nell\'inserimento della recensione' });
      } else {
        console.log('Recensione inserita correttamente nel database!');
        res.json({ message: 'Recensione inserita correttamente' });
      }
    });
  });


  app.post('/prenotazioni', (req, res) => {
    const { data, ora } = req.body;
  
    const query = 'INSERT INTO prenotazioni (data, ora) VALUES (?, ?)';
    mysqlConnection.query(query, [data, ora], (err, results) => {
      if (err) {
        console.error('Errore nell\'inserimento della prenotazione:', err);
        res.status(500).json({ error: 'Errore nell\'inserimento della prenotazione' });
      } else {
        console.log('Prenotazione inserita correttamente nel database!');
        res.json({ message: 'Prenotazione inserita correttamente' });
      }
    });
  });

  
  app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
  });