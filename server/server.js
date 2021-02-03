// app.js
const express = require('express');
const path = require('path');

const dbConnection = require('./config/database');

//Test db
dbConnection.authenticate()
    .then( () => console.log("Database connected"))
    .catch( err => console.log('error : '+ err));

// Create Express app
const app = express()

// A sample route
app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));