const router = require('express').Router();
const favouritesController = require('./controllers/favourites-controller');
const journalController = require('./controllers/journal-controller');

router.get('/favourites/get', favouritesController.getAll);
router.post('/favourites/post', favouritesController.postOne);
router.delete('/favourites/delete', favouritesController.deleteOne);

router.get('/journal/get', journalController.getAll);
router.post('/journal/post', journalController.postOne);
router.delete('/journal/delete', journalController.deleteOne);

module.exports = router;
