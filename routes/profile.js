var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', { domainname: 'IntoTheSkins',
  						pagename: 'Profile' });
});

module.exports = router;
