exports.showTravel = (req, res) => {
  const sampleTrips = [
    { title: 'Rome Explorer',    image: 'rome.jpg',    description: '…' },
    { title: 'Safari Adventure', image: 'safari.jpg', description: '…' }
  ];
  res.render('travel', { title: 'Browse Trips', trips: sampleTrips });
};
