exports.showHome = (req, res) => {
  res.render('home', {
    title:    'Travlr Getaways',
    welcome:  'Enjoy the Summer with Us!',
    heroText: 'Experience the world\'s best beaches and resorts.'
  });
};