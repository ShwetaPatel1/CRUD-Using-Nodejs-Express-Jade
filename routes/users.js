var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  res.send( id);
});

router.get('/delete/:id', function(req, res, next) {
  res.send('Delete user with Id : ' + id);
});



module.exports = router;
