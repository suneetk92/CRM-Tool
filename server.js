var http = require('http');
var express = require('express');
var mongodb = require('mongodb');
var assert = require('assert');

var app = express();
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});

app.use(express.static(__dirname+'/public'));
app.get('/page',function(req,res){
	res.sendFile(__dirname+'/public/view/index.html');
	});

app.listen(8081);
console.log('Server running at http://127.0.0.1:1337/');
