var express = require('express');
var app= express();

var mongoclient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/paramsdb";

var DB = null;
mongoclient.connect(url, function(err,db){
	
	DB=db;


});


app.use(express.static(__dirname+"/mystaticcontent"));


app.get("/realtimeparams", function(req, res, next){

	var params = req.query;
	console.log(params)
	var mycollection = DB.collection('paramsrecord');

	mycollection.insert(params, function(err, result){
		res.json({result:1});
	});

});

app.listen(8081);


