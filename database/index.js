const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  userName: String,
  repoName: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);
