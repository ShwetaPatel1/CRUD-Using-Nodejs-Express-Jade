var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('userForm', {
        title: 'Add User'
    });
});

/* CREATE user with given info. */
router.post('/', function (req, res, next) {
    const body = {
        job: req.body.job,
        name: req.body.firstName + ' ' + req.body.lastName,
    };
    fetch('https://reqres.in/api/users/', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            res.send(json);
        });
});

module.exports = router;