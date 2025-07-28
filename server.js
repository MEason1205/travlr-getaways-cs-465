const express = require('express');
const path    = require('path');
const hbs     = require('hbs');
const app     = express();
const PORT    = process.env.PORT || 3000;


// 4) Mount our new API
const apiRoutes = require('./app_server/routes/apiRoutes');
app.use('/api', apiRoutes);

// 5) Static files
app.use(express.static(path.join(__dirname, 'public')));

// 6) Start server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});