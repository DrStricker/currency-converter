var fx = require("money");
var http = require('http');
var fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 

fx.base = "USD";
fx.rates = {
	"EUR" : 0.90,
	"GBP" : 0.81,
	"HKD" : 7.84,
	"USD" : 1
}

var converted = fx.convert(12.99, {from: "USD", to: "EUR"});
console.log(converted)

var server = http.createServer(function(req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	})
	// var getvals = document.getElementById("button")
	function getvals() {
		var number=document.getElementById("number").value;
		var from=document.getElementById("from").value;
		var to=document.getElementById("to").value;
		console.log(number);
		console.log(from);
		console.log(to);
	}
	getvals();
}).listen(8080);
