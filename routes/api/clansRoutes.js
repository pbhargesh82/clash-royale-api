const express = require('express');
const router = express.Router();
const { handleGetRequest } = require('../common');
require('dotenv').config();
const APIURL = process.env.APIURL;

// Get information about a single clan by a clan tag.
router.get('/:clanTag', (req, res) => {
    console.log(req.params);
    const clanTag = req.params.clanTag.replace('#', '%23');
    handleGetRequest(`${APIURL}/clans/${clanTag}`, req, res);
});

//! This API endpoint has been temporarily disabled, possibilities to bring it back are being investigated.
// Retrieve clan's clan war log
router.get('/:clanTag/warlog', (req, res) => {
     const clanTag = req.params.clanTag.replace('#', '%23');
    handleGetRequest(`${APIURL}/clans/${clanTag}/warlog`, req, res);
});

// Search clans
router.get('/', (req, res) => {
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    const apiUrl = `${APIURL}/clans?${queryString}`;
    handleGetRequest(apiUrl, req, res);
});

// Retrieve clan's river race log
router.get('/:clanTag/riverracelog', (req, res) => {
    const clanTag = req.params.clanTag.replace('#', '%23');
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/clans/${clanTag}/riverracelog?${queryString}`, req, res);
});

// List clan members
router.get('/:clanTag/members', (req, res) => {
    const clanTag = req.params.clanTag.replace('#', '%23');
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/clans/${clanTag}/members?${queryString}`, req, res);
});

// Retrieve information about clan's current river race
router.get('/:clanTag/currentriverrace', (req, res) => {
    const clanTag = req.params.clanTag.replace('#', '%23');
    handleGetRequest(`${APIURL}/clans/${clanTag}/currentriverrace`, req, res);
});

module.exports = router;