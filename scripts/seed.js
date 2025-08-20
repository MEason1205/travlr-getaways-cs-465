const mongoose = require('../app_server/lib/db');
const Trip     = require('../app_server/models/trip');

const sampleTrips = [
  { title:'Rome Explorer',    image:'rome.jpg',       description:'Experience the Roman Empire.', price:299 },
  { title:'Safari Adventure', image:'safari.jpg',     description:'Get up close with wildlife.',  price:399 },
  { title:'Tropical Escape',  image:'sea-sound.jpg',  description:'Relax by the sea.',           price:249 },
];

async function seed() {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(sampleTrips);
    console.log('✅ Database seeded with', sampleTrips.length, 'trips');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
