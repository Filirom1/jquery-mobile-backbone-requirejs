// find a more complete pushState server here https://gist.github.com/1359650/516c8cceca852d4f2ed380960a67a6bee7b23773
var fs = require("fs"),
  express = require("express"),
  app = express.createServer();

app.use(express.static('client'));

app.get("*", function(req, res) {
  fs.createReadStream("client/index.html").pipe(res);
});

app.listen(8000);
