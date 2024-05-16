const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT)
console.log(port)
const token = process.env.CLASH_ROYALE_API_TOKEN;
console.log(token)

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Example route to fetch Clash Royale data
app.get('/player', (req, res) => {
    axios.get('https://api.clashroyale.com/v1/players/%23UQJQYQR', {
      headers: {
          'Authorization': process.env.CLASH_ROYALE_API_TOKEN
      }
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching Clash Royale data');
    });
});
// Example route to fetch Clash Royale data
app.get('/upcomingchests', (req, res) => {
    axios.get('https://api.clashroyale.com/v1/players/%23UQJQYQR/upcomingchests', {
      headers: {
          'Authorization': process.env.CLASH_ROYALE_API_TOKEN
      }
    })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error fetching Clash Royale data');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});