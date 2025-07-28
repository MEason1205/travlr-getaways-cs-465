const express        = require('express');
const tripController = require('../controllers/tripController');
const router         = express.Router();

router.get('/', tripController.list);

module.exports = router;