
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    var name = req.param("name");
    res.render('hello.ejs', {
		title: "タイトル",
		content: "コンテンツ",
		name: name
	});
	
    res.end();
})

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
    console.log(__dirname)
    
})


/*var express = require('express')
var http = require('http');

var app = express(); 
app.set('title', 'My Site');
app.get('/', function(req, res){
  console.log(req)
  res.send('hello world');
});

var server = http.createServer(app);

server.listen(8080);
*/