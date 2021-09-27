const { Entry } = require('../model/model');
const moment = require('moment');

async function getAll(req, res) {
  try {
    const entries = await Entry.find();
    entries.sort(dateSorter);
    res.status(200);
    res.send(entries);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
}

async function postOne(req, res) {
  try {
    const entry = await new Entry({
      date: req.body.date,
      location: req.body.location,
      comment: req.body.comment,
      distance: req.body.distance,
      exertion: req.body.exertion,
      duration: req.body.duration,
    }).save();
    res.status(200);
    res.send(entry);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
}

async function deleteOne(req, res) {
  try {
    await Entry.deleteOne({ _id: req.body._id });
    res.sendStatus(200);
  } catch (err) {
    res.status(500);
    console.log(err);
  }
}

function dateSorter(a, b) {
  if (
    moment(a.date, 'DD-MM-YYYY').format('unix') >
    moment(b.date, 'DD-MM-YYYY').format('unix')
  ) {
    return -1;
  }
  if (
    moment(a.date, 'DD-MM-YYYY').format('unix') <
    moment(b.date, 'DD-MM-YYYY').format('unix')
  ) {
    return 1;
  }
  return 0;
}

module.exports = { getAll, postOne, deleteOne };
