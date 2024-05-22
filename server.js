const express = require('express');
const axios = require('axios');
require('dotenv').config();
const packageJson = require('./package.json');

const app = express();
const port = process.env.PORT || 3000;

// Import routes
const routes = require('./routes');

// Use routes
app.use('/', routes);

// Define a route
app.get('/', (req, res) => {
    res.send(`Welocme to the ${packageJson.title} v${packageJson.version}.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});