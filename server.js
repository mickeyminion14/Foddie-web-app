var bodyparser = require('body-parser');
var fs = require('fs');
var path  = require ('path');

var express = require ('express');
var app = express();

app.use(bodyparser.urlencoded ({extended : false}));

app.use(express.static('public'));
app.get('/', function (req,res) {
	
	res.sendFile(path.resolve('./public/views/index.html'));
});


app.get('/login', function (req,res) {
	
	res.sendFile(path.resolve('login.html'));
});



app.post('/loginData',function(req, res) {

	var phone=req.body.phone;
    var password=req.body.password;
    
    mng.connect(url, function (err, db) {

        if(err) throw err;
    
        var data = db.db("cdac");
    
        data.collection("lol").findOne({"username": phone}, function (err,res) {
            if (err) throw err;
    
            else {
                return res;
            }
    
        });
    });
});

var server = app.listen(8200, function () {
		console.log("server running on port 8200");
	});