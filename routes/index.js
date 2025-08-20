const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/api/auth', authRoutes);
router.use('/api/trips', tripRoutes);

module.exports = router;
