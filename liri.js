var dotenv = require("dotenv").config();
var options = require("./assets/javascript/options.js");
var inquirer = require("inquirer");
var clear = require("clear");

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


