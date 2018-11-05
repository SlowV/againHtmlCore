var express = require('express');
const mysql = require('mysql');
var app = express();
app.use(express.static('public'));
var bodyparser = require('body-parser');
app.use(bodyparser());
app.set('view engine', 'ejs');
app.set('views', './apps/views');

//Db
const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'slowvmusic'
});

db.connect((err)=>{
   if (err){
      throw err;
   }
   console.log('MySql Connected...')
});

app.get('/insertKind', function (req, res) {
    var kind = {name: 'Kpop',description: 'Nhac han quoc'};
    var sql = 'INSERT INTO kind SET ?';
    db.query(sql, kind, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Insert Kind compile...');
    });
});

// post value from client to server

app.post('/insertKind', function (req, res) {
    var kind = {name: req.body.name, description: req.body.description};
    var sql = 'INSERT INTO kind SET ?';
    db.query(sql, kind, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send('Insert Kind compile...');
    });
});


var server = require('http').Server(app);
server.listen(3000,function () {
    console.log('Server is running on port 3000');
});

app.get('/', function (req, res) {
   res.render('home', {title: 'Form Create'});
});


