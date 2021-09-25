const mongoose = require('mongoose');
const dbName = 'favourites';

mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoose is connected!');
});

module.exports = mongoose;
