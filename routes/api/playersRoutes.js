const express = require('express');
const router = express.Router();
const { handleGetRequest } = require('../common');
require('dotenv').config();
const APIURL = process.env.APIURL;

// Get information about a single player by player tag
router.get('/:playerTag', (req, res) => {
    const playerTag = req.params.playerTag.replace('#', '%23');
    handleGetRequest(`${APIURL}/players/${playerTag}`, req, res);
});

// Get list of reward chests that the player will receive next in the game.
router.get('/:playerTag/upcomingchests', (req, res) => {
    const playerTag = req.params.playerTag.replace('#', '%23');
    handleGetRequest(`${APIURL}/players/${playerTag}/upcomingchests`, req, res);
});

// Get list of recent battles for a player
router.get('/:playerTag/battlelog', (req, res) => {
    const playerTag = req.params.playerTag.replace('#', '%23');
    handleGetRequest(`${APIURL}/players/${playerTag}/battlelog`, req, res);
});

module.exports = router;