//script per far scorrere fino alla sezione prenotazione
const prenotaLink = document.getElementById("prenota-link");
const reservationForm = document.getElementById("prenotazioni");

prenotaLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    reservationForm.scrollIntoView({ behavior: "smooth" }); 
});


//script per inviare i dati delle recensioni al database
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
  });
}


//script per inviare i dati delle prenotazioni al database
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
});