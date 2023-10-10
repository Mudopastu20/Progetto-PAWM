document.getElementById('modulo-recensione').addEventListener('submit', inviaRecensione);

function inviaRecensione(event) {
  event.preventDefault();

  const nome = document.getElementById('name').value;
  const recensione = document.getElementById('review').value;

  // Invia i dati al server
  fetch('http://localhost:3000/recensioni', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, recensione })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Recensione inviata con successo:', data);
  })
  .catch(error => console.error('Errore nell\'invio della recensione:', error));
}