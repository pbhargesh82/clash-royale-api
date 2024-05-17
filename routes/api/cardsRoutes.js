const express = require('express');
const router = express.Router();
const { handleGetRequest } = require('../common');
require('dotenv').config();
const APIURL = process.env.APIURL;

// Get list of available cards
router.get('/', (req, res) => {
    handleGetRequest(`${APIURL}/cards`, req, res);
});

module.exports = router;