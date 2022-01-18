const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/moodify");

const main = async () => {
  await mongoose.connect("mongodb://localhost/moodify");
};

main().catch((err) => console.log(err));

const spotifySchema = mongoose.Schema({
  song: String,
  artist: Array,
  album: String,
  preview: String,
});

const Spotify = mongoose.model("Spotify", spotifySchema);

const save = async (obj) => {
  const songData = new Spotify(songData);
  const insertSong = await Spotify.findOneAndUpdate(obj.song, obj, {
    upsert: true,
  });
  await console.log(insertSong);
};

module.exports.save = save;
