var express = require('express');

var router = express.Router();

var path = require('path');

router.get('/', function (req, res) {
    res.render('home.ejs', {title: 'SlowV - Music'});
});

router.get('/music', function (req, res) {
    res.render('managemusic.ejs', {title: 'Quản lý - Music'});
});

module.exports = router;