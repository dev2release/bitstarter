
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
//var content = fs.readFileSync('index.html', 'utf8');
var htmlFile = "index.html";




app.get('/', function(request, response) {
  	var html = fs.readFileSync(htmlFile).toString();
	response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
