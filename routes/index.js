var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SleepAiden' });
});

router.get('/tos', function (req, res, next) {
  res.render('terms-of-service')
})

router.get('/pp', function (req, res, next) {
  res.render('privacy-policy')
})

module.exports = router;
