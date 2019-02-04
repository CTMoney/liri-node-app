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

      inquirer
        .prompt(concertQuery)
        .then(function (concertResponse) {
          axios
            .get(`https://rest.bandsintown.com/artists/${concertResponse.concert_artist}/events?app_id=codingbootcamp`)
            .then(function (bitResponse, err) {
                if(err){throw err}
                let bit = bitResponse.data[0];
                let { venue, datetime, url} = bit;
                let {name, city, country} = venue;
                let time = moment(datetime, "YYYY-MM-DDTHH:mm:ss").format("LLLL")
                console.log(`${name}\n${city}, ${country}`);
                console.log(time);
                console.log(url);
                
                
            });
        });
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
