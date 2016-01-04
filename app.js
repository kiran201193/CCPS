var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mysql = require("mysql"),
	connection = mysql.createConnection({
		host     : 'localhost',
  		user     : 'kiran',
  		password : 'kiran',
  		database : 'ccps'
	});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/", function (req, res){
	res.redirect("/creditcard");
});

app.get("/creditcard", function (req, res) {
	res.render("index");
})

app.get("/creditcard/new", function (req, res) {
	res.render("newapplication");
})


app.post("/creditcard/new", function (req, res){

	// var table = "customer";

	connection.connect();

	connection.query('INSERT INTO customer values ("'+ req.body.customername+'","'+req.body.dob+'","'+req.body.address+'","'+req.body.contactno+'","'+req.body.pan+'","'+req.body.email+'")', function(err, rows, fields){
	
	if(!err)
		console.log("Success");
	else
		console.log("Failed");
	});


	connection.end();

});

app.listen(3000, function (err) {
	console.log("ServerUp");
});
