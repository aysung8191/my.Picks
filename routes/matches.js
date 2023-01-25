var express = require('express');
var router = express.Router();
const matchesCtrl = require('../controllers/matches')

// All actual paths start with "/matches"
router.get('/', matchesCtrl.index);
router.get('/new', matchesCtrl.new);
router.get('/:id', matchesCtrl.show);
router.post('/', matchesCtrl.create);

module.exports = router;
