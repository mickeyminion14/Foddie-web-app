var express = require('express');
var router = express.Router();
var fs = require('fs');
var path  = require ('path');


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/', function (req,res) {
	
	res.sendFile(path.resolve('./public/views/index.html'));
});


router.get('/about', function (req, res) {
    res.send('About birds')
  })
  
  module.exports = router;