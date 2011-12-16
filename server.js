// Require libraries
var os = require("os");
var fs = require("fs");
var cluster = require("cluster");
var express = require("express");
var site = express.createServer();

// Var up, bro
var i;

// Master thread spawns new listeners
if (cluster.isMaster) {
  // Spawn a new worker for each available thread
  for (i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  return;
}

// Server static files
site.use("/css", express.static("client/css"));
site.use("/js", express.static("client/js"));
site.use("/templates", express.static("client/templates"));

// API serving will happen here
// site.use("/api", ...);

// Ensure all routes go home, client side app..
site.get("*", function(req, res) {
  fs.createReadStream("client/index.html").pipe(res);
});

// Actually listen
site.listen(8000);
