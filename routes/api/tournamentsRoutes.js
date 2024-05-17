const express = require('express');
const router = express.Router();
const { handleGetRequest } = require('../common');
require('dotenv').config();
const APIURL = process.env.APIURL;

// Search tournaments
router.get('/', (req, res) => {
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    const apiUrl = `${APIURL}/tournaments?${queryString}`;
    handleGetRequest(apiUrl, req, res);
});

// Get information about a single tournament by a tournament tag.
router.get('/:tournamentTag', (req, res) => {
    const tournamentTag = req.params.tournamentTag.replace('#', '%23');
    handleGetRequest(`${APIURL}/tournaments/${tournamentTag}`, req, res);
});

module.exports = router;