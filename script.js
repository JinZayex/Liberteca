// Utilizziamo la funzione fetch per caricare il file JSON
fetch('biblio.json')
    .then(response => response.json()) // Converti la risposta in formato JSON
    .then(data => {
        console.log(data); // Effettua il log dei dati su console
    })
    .catch(error => console.error('Errore:', error));
