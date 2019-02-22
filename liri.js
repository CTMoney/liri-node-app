var dotenv = require("dotenv").config();
var options = require("./assets/javascript/options.js");
var inquirer = require("inquirer");
var clear = require("clear");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(PORT, () =>{
  console.log("App Listening on PORT: " + PORT);
  
})

var call_functions = require("./assets/javascript/call-functions");
var { bitCall, spotifyCall, omdbCall, dwisCall } = call_functions;



clear();

inquirer.prompt(options.primary).then(function (response) {
  var theCase = response.program_select;

  switch (theCase) {
    case "Concert This!":
      bitCall();
      break;
    case "Spotify This!":
      spotifyCall();
      break;
    case "Movie This!":
      omdbCall();
      break;
    case "Do What It Says":
      dwisCall();
      break;
  }

});

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

