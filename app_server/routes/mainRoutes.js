// app_server/routes/mainRoutes.js
const express = require('express');
const router  = express.Router();
const mainCtl = require('../controllers/mainController');

// Home & static pages
router.get('/',       mainCtl.showHome);
router.get('/rooms',  mainCtl.showRooms);
router.get('/meals',  mainCtl.showMeals);
router.get('/news',   mainCtl.showNews);
router.get('/about',  mainCtl.showAbout);
router.get('/contact',mainCtl.showContact);

const travellerCtl = require('../controllers/travelerController');
router.get('/travel', travellerCtl.showTravel);

module.exports = router;
