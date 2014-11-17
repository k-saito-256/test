var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function () {
 console.log("app")
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

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