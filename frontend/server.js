//import express amd the path module
const express = require("express");
const path = require("path");
//create an express app
const app = express();
//serve the static files from the react app
app.use(express.static(path.join(__dirname, "build")));
//redirect the request to the index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
}); //listen to the port 80
app.listen(80);
