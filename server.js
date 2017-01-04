var http = require('http');
var express = require('express');
var mongodb = require('mongodb');
var assert = require('assert');
var morgan     = require('morgan');
var config =require('./config');
var app = express();
var api =require('./app/api/api')(app,express);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var MongoClient = mongodb.MongoClient;

var url = config.database;

app.use(morgan('dev'));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type, Authorization');
    next();
});
app.use('/api',api);
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/index.html');
	});

app.listen(config.port);
console.log('Server running at http://localhost:'+config.port);
