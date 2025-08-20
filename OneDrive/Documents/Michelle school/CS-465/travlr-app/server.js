const express = require('express');
const path    = require('path');
const hbs     = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

// 1) View engine setup
app.set('view engine', 'hbs');
app.set('views',     path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// 2) Mount MVC routes
const mainRoutes     = require('./app_server/routes/mainRoutes');
const travelerRoutes = require('./app_server/routes/travelerRoutes');
app.use('/', mainRoutes);
app.use('/', travelerRoutes);

// 3) Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// 4) Start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
