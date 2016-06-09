var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('deposit', { domainname: 'IntoTheSkins',
  						pagename: 'Deposit'});
});

module.exports = router;
