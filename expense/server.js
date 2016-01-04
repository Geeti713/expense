var express = require('express');
var app= express();
var mongodb = require('mongodb');
var mongoclient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/employeedb";

var DB = null;
mongoclient.connect(url, function(err,db){
	
	DB=db;


});
var bodyparser =require('body-parser');
app.use(bodyparser());
app.use(express.static(__dirname+"/mystaticcontent"));



app.post("/login", function(req, res, next){

	var params = req.body;
	console.log(params);
	var email = params.email;
	
	
	var mycollection = DB.collection('employedetails');

	mycollection.find({email:email}).toArray(function(err, docs){

			console.log(docs);
			if(docs && docs.length>=1){
				var uobj = docs[0];
				if(uobj.pssd == params.pssd){
					res.json({ok:1});				
				}else{
					res.json({ok:0});
				}			
			}else{

					res.json({ok:2});
			}		
	});

	
	
});
app.get("/getexpense", function(req, res, next){
	
	var mycollection = DB.collection('expensecoll');

	mycollection.find().toArray(function(err, docs){
		
		res.json({arr:docs});
	});
	
	
});



app.get("/paidifischeck", function(req, res, next){

	var params = req.query;
	console.log("request recieved");
	console.log(params);
	var refid = params.refno;
	var id= new mongodb.ObjectID(params.id);
			
	var mycollection = DB.collection('expensecoll');
	mycollection.update({'_id':id},{$set:{'referenceno':refid,'status':'paid'}},{upsert:1}, function(err, result){
		console.log(err)
		res.json({ok:1});
	});
	
	
});

app.get("/getrefernceno", function(req, res, next){

	
	var mycollection = DB.collection('expensecoll');
		mycollection.find({},{'referenceno':1, '_id':0}).toArray(function(err, docs){
		console.log(docs);
		res.json({arr:docs});
	});		

	
});

app.post("/addholiday", function(req, res, next){

	var params = req.body;
	console.log(params);
	
	var mycollection = DB.collection('holidaycoll');

	mycollection.insert(params, function(err, result){
		res.json({ok:1});
	});
	
});


app.get("/getholiday", function(req, res, next){
	
	var mycollection = DB.collection('holidaycoll');

	mycollection.find().toArray(function(err, docs){
		
		res.json({arr:docs});
	});
	
	
});


app.get("/deleteholiday", function(req, res, next){

	var params = req.query;
	console.log("request recieved");
	console.log(params.id);
	var id= new mongodb.ObjectID(params.id);
			
		var mycollection = DB.collection('holidaycoll');
		
		mycollection.remove({'_id':id}, function(err, result){
			console.log(err);
			console.log(result);
			res.json({ok:1});
		});
	
});

app.get("/editholiday", function(req, res, next){

	var params = req.query;
	console.log("request recieved");
	console.log(params.id);
	var id= new mongodb.ObjectID(params.id);
			
		var mycollection = DB.collection('holidaycoll');
		
		mycollection.find({'_id':id},{_id:0}).toArray(function(err, docs){
		console.log(docs);
		res.json({arr:docs});
	});
	
});

app.post("/editholiday", function(req, res, next){

	var params = req.body;
	console.log(params);
	var name = params.name;
	var date = params.date;
	console.log("request recieved");
	console.log(params.id);
	var id= new mongodb.ObjectID(params.id);
	console.log(id)
	
	var mycollection = DB.collection('holidaycoll');

	mycollection.update({'_id':id},{name:name, date:date}, function(err, result){
					res.json({ok:1});

			
			
	
	});

});
app.listen(8081);
