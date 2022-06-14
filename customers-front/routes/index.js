var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/cadastro', function(req, res) {
  res.render('cadastro');
});

module.exports = router;
