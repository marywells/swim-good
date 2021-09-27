const mongoose = require('./');

const favouriteSchema = new mongoose.Schema({
  EUBWID: String,
  label: String,
  district: String,
  classification: Number,
  swimBan: Boolean,
  lat: Number,
  long: Number,
});

const entrySchema = new mongoose.Schema({
  date: String,
  location: String,
  comment: String,
  distance: String,
  exertion: String,
});

const Favourite = mongoose.model('Favourite', favouriteSchema);
const Entry = mongoose.model('Entry', entrySchema);

module.exports = { Favourite, Entry };
