var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { domainname: 'IntoTheSkins',
  						pagename: 'About' });
});

module.exports = router;
