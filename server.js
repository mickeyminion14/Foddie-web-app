var bodyparser = require('body-parser');
var express = require ('express');
var app = express();

var routes = require('./app/routes')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.use('/', routes);
var fs = require('fs');
var path  = require ('path');

const PORT = process.env.PORT || 6969; 
const HOST = process.env.host || '0.0.0.0';
app.use(bodyparser.urlencoded ({extended : false}));

app.use(express.static('./public'));



app.listen(PORT, function () {
	console.log("server running on https://"+HOST+":"+PORT+"/");
});