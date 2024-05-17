const express = require('express');
const router = express.Router();
const { handleGetRequest } = require('../common');
require('dotenv').config();
const APIURL = process.env.APIURL;

// Get list of global tournaments
router.get('/', (req, res) => {
    handleGetRequest(`${APIURL}/globaltournaments`, req, res);
});

module.exports = router;