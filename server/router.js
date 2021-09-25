const router = require('express').Router();
const controller = require('./controller');

router.get('/get', controller.getAll);
router.post('/post', controller.postOne);
router.delete('/delete', controller.deleteOne);

module.exports = router;
