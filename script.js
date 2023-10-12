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





document.getElementById('modulo-prenotazione').addEventListener('submit', function(event) {
  event.preventDefault();

  const data = document.getElementById('data').value;
  const ora = document.getElementById('ora').value;
  

  fetch('http://localhost:3000/prenotazioni', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data, ora })
  })
  .then(response => response.json())
  .then(data => {
 // Prenotazione avvenuta con successo
 const successMessage = document.createElement('div');
 successMessage.textContent = 'Prenotazione avvenuta con successo!';
 successMessage.classList.add('success-message');

 // Aggiungi il messaggio di successo al documento
 document.getElementById('prenotazioni').appendChild(successMessage);

 // Nascondi il messaggio di successo dopo 5 secondi
 setTimeout(() => {
   successMessage.style.display = 'none';
 }, 5000);
})

  .catch(error => console.error('Errore nell\'invio della prenotazione:', error));
});