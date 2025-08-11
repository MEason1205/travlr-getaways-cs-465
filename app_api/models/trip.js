// app_server/models/trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  image:       { type: String },
  price:       { type: Number },
  startDate:   { type: Date },
  endDate:     { type: Date },
  location:    { type: String }
});

module.exports = mongoose.model('Trip', tripSchema);