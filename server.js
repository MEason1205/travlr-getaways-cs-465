const express = require('express');
const path = require('path');
<<<<<<< HEAD
const hbs = require('hbs');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Mount combined routes
app.use('/', routes);

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
=======
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

>>>>>>> febd5d1e6ce99ab75017404cd29f34385280cd01
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
