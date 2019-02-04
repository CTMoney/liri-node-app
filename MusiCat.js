var Spotify = require("node-spotify-api");
var dotenv = require("dotenv").config();
var options = require("./options.js");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var moment = require("moment");
var figlet = require("figlet");
var axios = require("axios");
var clear = require("clear");

var spotify = new Spotify(keys.spotify);






inquirer
  .prompt(options.primary)
  .then(function (response) {

    if (response.program_select == "Concert This!") {
      bitCall();
    }

    else if (response.program_select == "Spotify This!") {

      inquirer
        .prompt(options.spotifyQuery)
        .then(function (spotifyResponse) {

          axios
            .get()
            .then(function (err, data) { });
        });
    }

    else if (response.program_select == "Movie This!") {

      inquirer
        .prompt(options.movieQuery)
        .then(function (movieResponse) {

          axios
            .get()
            .then(function (err, data) { });
        });
    }

    else if (response.program_select == "Do what It Says") {

    }
  });

function bitCall() {
  inquirer
    .prompt(concertQuery)
    .then(function (concertResponse) {
      axios
        .get(`https://rest.bandsintown.com/artists/${concertResponse.concert_artist}/events?app_id=codingbootcamp`)
        .then(function (bitResponse, err) {
          if (err) { throw err }
          clear();
          figlet('              * - _ - Venue Info - _ - *', function (err, data) {
            if (err) { throw err }
            console.log(data, "\n\n\n\n\n\n\n");
          });

          setTimeout(() => {
            for (let i = 0; i < 4; i++) {

              let bit = bitResponse.data[i];
              let { venue, datetime, url } = bit;
              let { name, city, country } = venue;
              let time = moment(datetime, "YYYY-MM-DDTHH:mm:ss").format("LLLL")
              console.log(`\n  Venue: ${name}\n  Location: ${city}, ${country}\n  On: ${time}\n  ${url}\n`);
              console.log("    ---------------------------------------------------------------------------------------------------------------");

            }
          }, 750)



        });
    });
}