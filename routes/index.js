var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout: 'home' });
});

router.get('/tos', function (req, res, next) {
  res.render('terms-of-service')
})

router.get('/pp', function (req, res, next) {
  res.render('privacy-policy')
})

router.get('/about', function (req, res, next) {
  res.render('about')
})

module.exports = router;
