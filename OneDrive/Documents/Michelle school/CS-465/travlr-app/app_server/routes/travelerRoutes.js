const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/travelerController');

router.get('/travel', controller.showTravel);

module.exports = router;