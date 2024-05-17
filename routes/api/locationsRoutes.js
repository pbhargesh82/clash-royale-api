const express = require('express');
const router = express.Router();
const { handleGetRequest } = require('../common');
require('dotenv').config();
const APIURL = process.env.APIURL;

// List locations
router.get('/', (req, res) => {
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    const apiUrl = `${APIURL}/locations?${queryString}`;
    handleGetRequest(apiUrl, req, res);
});

// Get information about specific location
router.get('/:locationId', (req, res) => {
    const locationId = req.params.locationId;
    handleGetRequest(`${APIURL}/locations/${locationId}`, req, res);
});

// Get clan rankings for a specific location
router.get('/:locationId/rankings/clans', (req, res) => {
    const locationId = req.params.locationId;
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/locations/${locationId}/rankings/clans?${queryString}`, req, res);
});

// Get players rankings for a specific location
router.get('/:locationId/rankings/players', (req, res) => {
    const locationId = req.params.locationId;
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/locations/${locationId}/rankings/players?${queryString}`, req, res);
});

// Get clan war rankings for a specific location
router.get('/:locationId/rankings/clanwars', (req, res) => {
    const locationId = req.params.locationId;
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/locations/${locationId}/rankings/clanwars?${queryString}`, req, res);
});

// Lists top player league seasons.
router.get('/global/seasons', (req, res) => {
    const apiUrl = `${APIURL}/locations/global/seasonsV2`;
    handleGetRequest(apiUrl, req, res);
});

// Get top Path of Legend players for given season.
router.get('/global/pathoflegend/:seasonId/rankings/players', (req, res) => {
    const seasonId = req.params.seasonId;
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/locations/global/pathoflegend/${seasonId}/rankings/players?${queryString}`, req, res);
});

// Get global tournament rankings
router.get('/global/rankings/tournaments/:tournamentTag', (req, res) => {
    const tournamentTag = req.params.tournamentTag.replace('#', '%23');
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/locations/global/rankings/tournaments/${tournamentTag}?${queryString}`, req, res);
});

// Get player rankings in Path of Legend for a specific location
router.get('/:locationId/pathoflegend/players', (req, res) => {
    const locationId = req.params.locationId;
    const queryParams = req.query;
    const queryString = new URLSearchParams(queryParams).toString();
    handleGetRequest(`${APIURL}/locations/${locationId}/pathoflegend/players?${queryString}`, req, res);
});

module.exports = router;