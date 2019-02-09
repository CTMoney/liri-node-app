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

clear();

inquirer.prompt(options.primary).then(function(response) {
  if (response.program_select == "Concert This!") {
    bitCall();
  } else if (response.program_select == "Spotify This!") {
    spotifyCall();
  } else if (response.program_select == "Movie This!") {
    omdbCall();
  } else if (response.program_select == "Do what It Says") {
    dwisCall();
  }
});

function bitCall() {  inquirer.prompt(concertQuery).then(function(concertResponse) {
    axios
      .get(
        `https://rest.bandsintown.com/artists/${
          concertResponse.concert_artist
        }/events?app_id=codingbootcamp`
      )
      .then(function(bitResponse, err) {
        if (err) {
          throw err;
        }

        clear();

        figlet("              * - _ - Venue Info - _ - *", function(err, data) {
          if (err) {
            throw err;
          }
          console.log(data, "\n\n\n\n\n\n\n");
        });

        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            let bit = bitResponse.data[i];
            let { venue, datetime, url } = bit;
            let { name, city, country } = venue;
            let time = moment(datetime, "YYYY-MM-DDTHH:mm:ss").format("LLLL");
            console.log(
              `\n  Venue: ${name}\n  Location: ${city}, ${country}\n  On: ${time}\n  ${url}\n`
            );
            console.log(
              "    ---------------------------------------------------------------------------------------------------------------"
            );
          }
        }, 750);
      });
  });
}

function spotifyCall() {
  inquirer.prompt(options.spotifyQuery).then(function(spotifyResponse) {
    clear();
    figlet("              * - _ - Song Info - _ - *", function(err, data) {
      if (err) {
        throw err;
      }
      console.log(data, "\n\n\n\n\n\n\n");
    });
    spotify.search(
      { type: "track", query: spotifyResponse.spotify_song },
      function(data, err) {
        if (err) {
          throw err;
        }
        let song = data.tracks.items[0];
        let { name, album, preview_url, artists } = song;
        console.log(
          `\n\n${name}\nBy ${artists[0].name}\nOff the Album ${
            album.name
          }\nPreview Here: ${preview_url}\n`
        );
      }
    );
  });
}

function omdbCall() {
  inquirer.prompt(options.movieQuery).then(function(movieResponse) {
    clear();
    figlet("              * - _ - Movie Info - _ - *", function(err, data) {
      if (err) {
        throw err;
      }
      console.log(data, "\n\n\n\n\n\n\n");
    });
    axios
      .get(
        `http://www.omdbapi.com/?apikey=trilogy&t=${movieResponse.movie_title}`
      )
      .then(function(data, err) {
        if (err) {
          throw err;
        }
        let movie = data.data;
        let {Title,Released,Ratings,imdbRating,Plot,Actors,Language} = movie;
        let tomatoRate_o = Ratings[1].Value;

        console.log(`\n\n                                                  ${Title} (${Language})`);
        console.log(`                                                       ${Released}`);
        console.log(`\n                                             Rotten Tomatoes: ${tomatoRate_o} IMDB: ${imdbRating}`);
        console.log(`\n                              Starring ${Actors}`);
        console.log(`\n   ${JSON.stringify(Plot, null, 0)}\n\n\n\n`);
      });
  });
}

function dwisCall() {

  clear();
  let randomChoice = Math.floor(Math.random() * 3);
  let programArray = ["Concert This Selected!", "Spotify This Selected!", "Movie This Selected!"]
  setTimeout(() => {
    figlet('3', function(err, data) {
      if (err) {throw err}
      console.log(data)
    })}, 500);

  setTimeout(() => {
    figlet('2', function(err, data) {
      if (err) {throw err}
      console.log(data)
    })}, 2000);

  setTimeout(() => {
    figlet('1', function(err, data) {
      if (err) {throw err}
      console.log(data)
    })}, 3500);

  setTimeout(() => {
    figlet(`${programArray[randomChoice]}`, function(err, data) {
      if (err) {throw err}
      console.log(data)
    })}, 5000);

  setTimeout(() => {
    clear();
    switch (randomChoice) {
      case 1:
      bitCall()
      break;
      case 2:
      spotifyCall();
      break;
      case 3:
      omdbCall();
      break;
    }}, 6500);
}


