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

const Favourite = mongoose.model('Favourite', favouriteSchema);

module.exports = Favourite;
