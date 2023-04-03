const express = require ("express");
const bodyParser = require ("body-parser");

//creating an app constant
const app = express();

//To enable me accept data from my form
app.use(bodyParser.urlencoded({extended: true}));

//This is to enable my server access my static files for css and images
app.use(express.static("public"));

//To enable me send html file to the browser
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//To enable my server listen on port 3000
app.listen(3000, function(req, res){
  console.log("Server is running on port 3000");
});
