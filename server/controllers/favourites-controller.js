const { Favourite } = require('../model/model');

async function getAll(req, res) {
  try {
    const favourites = await Favourite.find();
    favourites.sort(alphabetise);
    res.status(200);
    res.send(favourites);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
}

async function postOne(req, res) {
  try {
    const favourite = await new Favourite({
      EUBWID: req.body.EUBWID,
      label: req.body.label,
      district: req.body.district,
      classification: req.body.classification,
      swimBan: req.body.swimBan,
      lat: req.body.lat,
      long: req.body.long,
    }).save();
    res.status(200);
    res.send(favourite);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
}

async function deleteOne(req, res) {
  try {
    await Favourite.deleteOne({ EUBWID: req.body.EUBWID });
    res.sendStatus(200);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
}

function alphabetise(a, b) {
  var labelA = a.label.toUpperCase();
  var labelB = b.label.toUpperCase();
  if (labelA < labelB) {
    return -1;
  }
  if (labelA > labelB) {
    return 1;
  }
  return 0;
}

module.exports = { getAll, postOne, deleteOne };
