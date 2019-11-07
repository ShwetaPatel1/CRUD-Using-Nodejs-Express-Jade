var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

/* GET request for specific user */
router.get('/:id', function (req, res, next) {
    fetch('https://reqres.in/api/users/' + req.params.id)
        .then(response => response.json())
        .then(json => {
            if (Object.keys(json).length !== 0) {
                console.log(json.data);
                res.render('userForm', {
                    title: 'Update User',
                    updateUser: json.data
                });
            } else {
                res.writeHead(404);
                res.write('User not found.');
            }
        });

});

/* PATCH request for user update */
router.post('/:id', function (req, res, next) {
    const body = {
        job: req.body.job,
        name: req.body.firstName + ' ' + req.body.lastName,
    };
    console.log(body);
    fetch('https://reqres.in/api/users/' + req.params.id, {
            method: 'patch',
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