const express = require('express');
const bodyParser = require('body-parser');
const sessions = require('express-session');

var session;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(sessions({
    secret: '&jh&B7H8^&^&*&^76FG&^f',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.get('/login', function (req, res) {
    session = req.session;
    if (session.uniqueID) {
        res.redirect('/redirects');
    } else {
        res.sendFile('./login.html', {
            root: __dirname
        });
    }
});

app.post('/login', function (req, res) {
    session = req.session;
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        session.uniqueID = req.body.username
    }
    res.redirect('/redirects');
});

app.get('/redirects', function (req, res) {
    session = req.session;
    if (session.uniqueID) {
        res.redirect('/admin');
    } else {
        res.send('Please Fill Correct the Form! <a href="/login">Go Back</a>');
    }
});

app.get('/admin', function (req, res) {
    session = req.session;
    if (session.uniqueID) {
        res.send('Wow you are Admin...! <a href="/logout">Logout</a>')
    } else {
        res.send('Please Fill Correct the Form! <a href="/logout">Go Back</a>');
    };
});

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        console.log('Error: ', err);
        res.redirect('/login');
    });
});

app.listen(4000, function () {
    console.log(`Express Started on: http://localhost:${4000}`);
});