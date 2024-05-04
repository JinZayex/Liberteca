// Utilizziamo la funzione fetch per caricare il file JSON;
fetch('biblio.json')
    .then(response => response.json()) // Converti la risposta in formato JSON
    .then(data => {
        console.log("my datas",data); // Effettua il log dei dati su console

        data.forEach(function(element) {
            var h3 = document.createElement("h3");          // Create a new h1 element
            h3.textContent = element.titolo;                // Set the content of the h1 element to the name of the current element
            document.body.appendChild(h3);                  // Append the h1 element to the body (you can append it to any other element you want)
        
            var p = document.createElement("p");          // Create a new h1 element
            p.textContent = element.autore;                 // Set the content of the h1 element to the name of the current element
            document.body.appendChild(p);   
        
            var p = document.createElement("p");          // Create a new h1 element
            p.textContent = "da: " + element.contributore;                 // Set the content of the h1 element to the name of the current element
            document.body.appendChild(p);   
        
            var a = document.createElement("a");
            a.href = element.link;
            a.download = element.titolo;
            a.textContent = "Download " + element.titolo; 
            document.body.appendChild(a)
        
            var hr = document.createElement("hr");          // Create a new h1 element
            document.body.appendChild(hr);   
        
        })
    })
    .catch(error => console.error('Errore:', error));

