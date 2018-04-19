const express = require('express');
const db = require('../database/Photo');

const app = express();

app.use(express.static('public'));

app.get('/rooms/:id/photos', (req, res) => {
  db.find({listingId: req.params.id}).exec(((err, photos) => {
    res.send(photos);
  }));
});

module.exports = app;