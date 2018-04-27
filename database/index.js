const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://mongo/photoGallery');


module.exports = db;