
const express = require('axios');
const URL = 'https://www.latin.it/search.htm?q=';

axios.get(URL)
    .then(response => {
        console.log("Connessione effettuata: ");
        console.log(response.data);
    })
    .catch(error => {
        console.error("Errore: ", error);
    });