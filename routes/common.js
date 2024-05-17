const axios = require('axios');
require('dotenv').config();

const token = process.env.CLASH_ROYALE_API_TOKEN;
console.log(token);

// Function to handle GET requests
async function handleGetRequest(url, req, res) {
    try {
        const response = await axios.get(url, {
            headers: {
            'Authorization': token
            }
        });
        res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(error.response.status).send(error.response.data.message);
    }
}

module.exports = { handleGetRequest };
