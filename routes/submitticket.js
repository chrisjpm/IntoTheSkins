var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('submitticket', { domainname: 'IntoTheSkins',
  						pagename: 'Submit Ticket'});
});

module.exports = router;
