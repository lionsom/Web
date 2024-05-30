var express = require('express');
var router = express.Router();

/* GET cool. */
router.get('/', function(req, res, next) {
  console.log('aaa',req);
  res.render('cool', { title: 'Cool !!!!' });
});

module.exports = router;
