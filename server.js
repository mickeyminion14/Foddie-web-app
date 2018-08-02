var bodyparser = require('body-parser');
var express = require ('express');
var app = express();
var routes = require('./app/routes')
app.use('/', routes);
var fs = require('fs');
var path  = require ('path');
app.use(bodyparser.urlencoded ({extended : false}));

app.use(express.static('./public'));

app.listen(8200, function () {
		console.log("server running on port 8200");
	});