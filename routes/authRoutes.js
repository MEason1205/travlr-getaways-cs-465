const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('Login endpoint');
});

router.get('/', (req, res) => {
  res.send('Auth API root');
});

module.exports = router;
