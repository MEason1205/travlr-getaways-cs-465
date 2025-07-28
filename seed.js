const mongoose = require('./app_server/lib/db');
const Trip     = require('./app_server/models/trip');
const data     = require('./app_server/data/trips.json');

async function seed() {
  try {
    await Trip.deleteMany({});
    console.log('🗑️  Cleared Trips collection.');
    const inserted = await Trip.insertMany(data);
    console.log(`✅ Inserted ${inserted.length} trips.`);
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
