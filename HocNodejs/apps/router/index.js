var express = require('express');

var router = express.Router();

var path = require('path');

const mysql = require('mysql');
//Db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'slowvmusic'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected from Router...')
});


router.get('/', function (req, res) {
    res.render('home.ejs', {title: 'SlowV - Music'});
});

router.get('/music', function (req, res) {
    var sql = 'SELECT * FROM kind';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.render('managemusic.ejs', {title: 'Quản lý - Music', kind: result});
    });

});

router.get('/music/test', function (req, res) {
    // var song = {
    //     name: req.body.name,
    //     kindId: req.body.kindId,
    //     description:req.body.description,
    //     images
    // };
    console.log(req.files.images.name);
});

module.exports = router;