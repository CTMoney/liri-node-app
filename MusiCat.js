var Spotify = require("node-spotify-api");
var dotenv = require("dotenv").config();
var options_primary = require("./options.js");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var clear = require("clear");
var figlet = require("figlet");
var spotify = new Spotify(keys.spotify);

inquirer.prompt(options_primary).then(function(response) {
  if (response.program_select == "Concert This!") {
    inquirer.prompt(concertQuery).then(function(concertResponse) {
      axios
        .get(
          `https://rest.bandsintown.com/artists/${
            response.artist
          }/events?app_id=codingbootcamp`
        )
        .then(function(error, data) {});
    });
  } else if (response.program_select == "Spotify This!") {
    inquirer.prompt(spotifyQuery).then(function(spotifyResponse) {
      axios.get().then(function(error, data) {});
    });
  } else if (response.program_select == "Movie This!") {
    inquirer.prompt(spotifyQuery).then(function(spotifyResponse) {
      axios.get().then(function(error, data) {});
    });
  } else if (response.program_select == "Do what It Says") {
    clear();

    var randomChoice;
    var counter = 0;

    let mathVisual = setInterval(() => {
      randomChoice = Math.floor(Math.random() * 3);
      let programChoiceArray = [
        "Concert This!",
        "Spotify This!",
        "Movie This!"
      ];

      clear();

      figlet(
        `                    ${programChoiceArray[randomChoice]}`,
        function(err, data) {
          if (err) {
            throw err;
          }

          console.log(`\n\n\n\n\n\n\n\n\n\n${data}`);
        }
      );
      setTimeout(() => {
        clear();
      }, 750);

      counter++;
      if (counter == 3) {
        clearInterval(mathVisual);
        let flashingCounter = 0;
        let flashingInterval = setInterval(() => {
          if (flashingCounter % 2 == 0) {
            figlet(
              `                    ${programChoiceArray[randomChoice]}!!`,
              function(err, data) {
                if (err) {
                  throw err;
                }
                console.log(`\n\n\n\n\n\n\n\n\n\n${data}`);
              }
            );

            flashingCounter++;
          } else {
            clear();
            flashingCounter++;
          }

          if (flashingCounter == 20) {
            figlet("Selection Made!"),
              function(err, data) {
                if (err) {
                  throw err;
                }
                console.log(data);
              };

            clearInterval(flashingInterval);

            setTimeout(() => {
              clear();
              switch (randomChoice) {
                case randomChoice == 1:
                  concertThis();
                  break;
                case randomChoice == 2:
                  spotifyThis();
                  break;
                case randomChoice == 3:
                  movieThis();
                  break;
                default:
                  break;
              }
            }, 2500);
          }
        }, 200);
      }
    }, 1000);
  }
});
