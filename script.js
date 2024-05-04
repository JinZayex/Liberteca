// Utilizziamo la funzione fetch per caricare il file JSON;
fetch('biblio.json')
    .then(response => response.json()) // Converti la risposta in formato JSON
    .then(data => {
        console.log(data); // Effettua il log dei dati su console

        data.forEach(function(element){
            var h3 = document.createElement("h3");          // Create a new h1 element
            h3.textContent = element.nome;                // Set the content of the h1 element to the name of the current element
            document.body.appendChild(h3);                  // Append the h1 element to the body (you can append it to any other element you want)
        })
    })
    .catch(error => console.error('Errore:', error));

