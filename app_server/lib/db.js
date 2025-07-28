const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/travlr', {
  useNewUrlParser:    true,
  useUnifiedTopology: true,
});

mongoose.connection.on('open', () =>
  console.log('🗄️  Connected to MongoDB.')
);
mongoose.connection.on('error', err =>
  console.error('❌ MongoDB error:', err)
);

module.exports = mongoose;
