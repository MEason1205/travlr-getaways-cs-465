const express = require('express');
const router = express.Router();

// Example trip route
router.get('/', (req, res) => {
  res.send('All trips listed here');
});

module.exports = router;