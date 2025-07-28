const Trip = require('../models/trip');

async function list(req, res, next) {
  try {
    const trips = await Trip.find({});
    res.json(trips);
  } catch (err) {
    next(err);
  }
}

module.exports = { list };