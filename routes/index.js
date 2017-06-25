var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { layout: 'app-landing' });
    //redirect to alphabet song before sleepaiden is published
    res.redirect('/alphabetsong');
});

router.get('/tos', function (req, res, next) {
  res.render('terms-of-service', {
      title: "Terms of Service"
  })
})

router.get('/pp', function (req, res, next) {
  res.render('privacy-policy', {
      title: 'Privacy Policy'
  })
})

router.get('/about', function (req, res, next) {
  res.render('about')
})

router.get('/alphabetsong', function (req, res, next) {
    res.render('alphabetsong', {
        layout: 'app-landing',
        appName: 'Alphabet Song',
        demoImage: '/img/alphabetsong/Screenshot0.png',
        download: {
            googlePlay: 'https://play.google.com/store/apps/details?id=com.sleepaiden.alphebetsong',
            amazon: 'https://www.amazon.com/dp/B072X1FZCN/'
        },
        title: 'Alphabet Song - For stimulating the initial sounds of the little one',
        desc: 'Alphabet song is designed for you to use visual, auditory and tactile cues to stimulate the initial sounds of the little one.'
    })
})

module.exports = router;
