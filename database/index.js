const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moodify');

// autoIncrement = require('mongoose-auto-increment');

const main = async() => {
  await mongoose.connect('mongodb://localhost/moodify');
}

main().catch(err => console.log(err));

// autoIncrement.initialize(connection);


const spotifySchema = mongoose.Schema({
  song: String,
  artist: Array,
  album: String,
  preview: String
});

const Spotify = mongoose.model('Spotify', spotifySchema);

// console.log(spotifySchema);

const save = async(obj) => {
  const songData = new Spotify(songData);
  const insertSong = await Spotify.findOneAndUpdate(obj.song, obj, { upsert: true })
  // .then((results) => {
  //   console.log(results)
  // })
  await console.log(insertSong);
}

module.exports.save = save;



// const { MongoCLient } = require('mongodb');

// const url = 'mongodb://localhost:3000';




