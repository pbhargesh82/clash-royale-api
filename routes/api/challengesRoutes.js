const express = require('express');
const router = express.Router();
const { handleGetRequest } = require('../common');
require('dotenv').config();
const APIURL = process.env.APIURL;

// Get current and upcoming challenges
router.get('/', (req, res) => {
    handleGetRequest(`${APIURL}/challenges`, req, res);
});

module.exports = router;