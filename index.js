// Importeren van de express module in node_modules
const express = require('express');

// Aanmaken van een express app
const app = express();

// Endpoints
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Starten van de server en op welke port de server moet luisteren
app.listen(3000, () => {
    console.log('Server is running port 3000');
});