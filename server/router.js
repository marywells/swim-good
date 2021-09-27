const router = require('express').Router();
const controller = require('./controller');

router.get('/favourites/get', controller.getAll);
router.post('/favourites/post', controller.postOne);
router.delete('/favourites/delete', controller.deleteOne);

module.exports = router;
