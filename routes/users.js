var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET all users listing. */
router.get('/', function (req, res, next) {
  fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => {
      res.render('userList', {
        title: 'Users',
        userList: json.data
      });
    });
});


/* DELETE user info with given id. */
router.get('/:id', function (req, res, next) {
  fetch('https://reqres.in/api/users/' + req.params.id, {
      method: 'delete'
    })
    .then(response => {
      console.log(response);
      res.render('deletedUser', {
        message: 'User deleted.',
        response
      });
    });
});





module.exports = router;