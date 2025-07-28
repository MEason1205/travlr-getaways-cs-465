const mongoose = require('mongoose');
const { Schema } = mongoose;

const tripSchema = new Schema({
  title:       { type: String, required: true },
  image:       String, 
  description: String,
  price:       Number,
  tags:        [String],
});

module.exports = mongoose.model('Trip', tripSchema);
