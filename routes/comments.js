var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.post('/matches/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);


module.exports = router;