var fs = require("fs"),
  express = require("express"),
  app = express.createServer();

app.use(express.static('client'));

app.get("*", function(req, res) {
  fs.createReadStream("client/index.html").pipe(res);
});

app.listen(8000);
