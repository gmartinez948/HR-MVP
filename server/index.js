const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const superagent = require('superagent');
const save = require('../database/index.js');
// console.log(save);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/f', (req, res) => {
  console.log('i have been hit');
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});