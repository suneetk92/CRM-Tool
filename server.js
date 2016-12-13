
var http = require('http');
var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));
app.get('/page',function(req,res){
	res.sendFile(__dirname+'/public/view/index.html');
	});

app.listen(8081);
console.log('Server running at http://127.0.0.1:1337/');
