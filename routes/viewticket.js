var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('viewticket', { domainname: 'IntoTheSkins',
  						pagename: 'Ticket' });
});

module.exports = router;
