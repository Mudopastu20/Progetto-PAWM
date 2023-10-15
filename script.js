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










//script per far apparire messaggio a schermo quando una prenotazione viene effettuata con successo
const reservationFormElement = document.getElementById('modulo-prenotazione');

    reservationFormElement.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene l'invio del modulo

        // Esegui il controllo dei dati qui
        const dateInput = document.getElementById("data").value;
        const timeInput = document.getElementById("ora").value;

        if (isValidData(dateInput, timeInput, guestsInput)) {
            // I dati sono validi, puoi fare altro (come inviarli al server)
            alert("Dati validi. Invio al server...");
            reservationFormElement.reset(); // Cancella il modulo dopo l'invio
        } else {
            alert("I dati non sono validi. Per favore, controlla i campi.");
        }
    });


    function isValidData(date, time, guests) {
        // Esempi di controlli, personalizzali in base alle tue esigenze
        const currentDate = new Date();
        const selectedDate = new Date(date);

        if (selectedDate < currentDate) {
            alert("La data non può essere nel passato.");
            return false;
        }

    const selectedTime = new Date(`1970-01-01T${time}`);
    const dayOfWeek = selectedTime.getDay();
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();

    // Controlla se il tempo è valido nei giorni e negli orari specificati
    if (
        (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 20 && hours < 24) || // Lunedi - Venerdi dalle 12:00 alle 23:59
        (dayOfWeek === 6 && hours >= 12 && (hours > 12 || (hours === 12 && minutes >= 24))) || // Sabato dalle 12:24
        (dayOfWeek === 0 && hours >= 12 && hours < 24) // Domenica dalle 12:00 alle 23:59
    ) {
        return true; // Il tempo è valido
    } else {
        alert("L'orario inserito non corrisponde ai nostri orari di apertura. Controlla gli orari disponibili.");
        return false;
    }
        // Aggiungi altri controlli qui

        return true;
    };






//script per far apparire messaggio a schermo quando una recensione viene effettuata con successo
    const reviewFormElement = document.getElementById('modulo-recensione');

    reviewFormElement.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene l'invio del modulo

        // Esegui il controllo dei dati qui
        const nameInput = document.getElementById("name").value;
        const reviewInput = document.getElementById("review").value;

        if (isValidReviewData(nameInput, reviewInput)) {
            // I dati della recensione sono validi, puoi fare altro (come inviarli al server)
            alert("Recensione valida. Invio al server...");
            reviewFormElement.reset(); // Cancella il modulo dopo l'invio
        } else {
            alert("I dati della recensione non sono validi. Per favore, controlla i campi.");
        }
    });

    function isValidReviewData(name, review) {
        // Esempi di controlli, personalizzali in base alle tue esigenze
        if (name.trim() === "") {
            alert("Inserisci un nome valido.");
            return false;
        }

        if (review.trim() === "") {
            alert("Inserisci una recensione valida.");
            return false;
        }

        // Aggiungi altri controlli qui

        return true;
    };
});