primary = [
  {
    type: "list",
    message: "Select a program!",
    choices: [
      "Concert This!",
      "Spotify This!",
      "Movie This!",
      "Do what It Says"
    ],
    name: "program_select"
  }
];

concertQuery = [
  {
    type: "input",
    message: "Please enter an artist / band name",
    name: "concert_artist"
  }
]

spotifyQuery = [
  {
    type: "input",
    message: "Please enter a song name",
    name: "spotify_song"
  }
]

movieQuery = [
  {
    type: "input",
    message: "Please enter a movie name",
    name: "movie_title"
  }
]

module.exports = {
  primary,
  concertQuery,
  spotifyQuery,
  movieQuery
};
