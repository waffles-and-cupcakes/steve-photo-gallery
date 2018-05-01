const express = require('express');
const db = require('../database/Photo');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/rooms/:id', express.static('public'));

app.get('/rooms/:id/photos', (req, res) => {
  db.find({ listingId: req.params.id }).exec(((err, photos) => {
    res.send(photos);
  }));
});

module.exports = app;
