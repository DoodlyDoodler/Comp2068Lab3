'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'My Family' });
});

router.get('/Simarpreet', function (req, res) {
    res.render('Simarpreet', { title: 'Simarpreet' });
});

router.get('/Mom', function (req, res) {
    res.render('Mom', { title: 'Mom' });
});

router.get('/Dad', function (req, res) {
    res.render('Dad', { title: 'Dad' });
});

router.get('/Brother', function (req, res) {
    res.render('Brother', { title: 'Brother' });
});

module.exports = router;
