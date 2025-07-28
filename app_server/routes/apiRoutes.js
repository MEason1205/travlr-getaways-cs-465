const express       = require('express');
const tripController = require('../controllers/tripController');

const router = express.Router();

// GET /api/trips
router.get('/trips', tripController.list);

module.exports = router;