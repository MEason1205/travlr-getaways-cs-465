// app_server/controllers/mainController.js

const tripsData = require('../data/trips.json');
const roomsData = require('../data/rooms.json');
const mealsData = require('../data/meals.json');
const newsData  = require('../data/news.json');

// export each page‐rendering function
exports.showHome = (req, res) => {
  res.render('home', { title: 'Home', welcome:'Enjoy the Summer with Us!', trips:tripsData });
};

exports.showRooms = (req, res) => {
  res.render('rooms', { title: 'Our Rooms', rooms:roomsData });
};

exports.showMeals = (req, res) => {
  res.render('meals', { title: 'Delicious Eats', meals:mealsData });
};

exports.showNews = (req, res) => {
  res.render('news', { title: 'Latest News', news:newsData });
};

exports.showAbout = (req, res) => { /* … */ };
exports.showContact = (req, res) => { /* … */ };
