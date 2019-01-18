var express = require('express');
const products = require('./products')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to express')
});

router.use('/api',products)

module.exports = router;
