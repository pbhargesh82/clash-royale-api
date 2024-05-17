const express = require('express');
const router = express.Router();

// Import route handlers for each category
const clansRoutes = require('./api/clansRoutes');
const playersRoutes = require('./api/playersRoutes');
const cardsRoutes = require('./api/cardsRoutes');
const tournamentsRoutes = require('./api/tournamentsRoutes');
const locationsRoutes = require('./api/locationsRoutes');
const challengesRoutes = require('./api/challengesRoutes');
const globalTournamentsRoutes = require('./api/globalTournamentsRoutes');

// Define routes for each category
router.use('/clans', clansRoutes);
router.use('/players', playersRoutes);
router.use('/cards', cardsRoutes);
router.use('/tournaments', tournamentsRoutes);
router.use('/locations', locationsRoutes);
router.use('/challenges', challengesRoutes);
router.use('/globaltournaments', globalTournamentsRoutes);

module.exports = router;
