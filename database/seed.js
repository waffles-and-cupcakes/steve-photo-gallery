const db = require('./index');
const Photo = require('./Photo');
const seedData = require('./fakePhotoData');

const insertMockPhotos = () => {
  Photo.create(seedData)
    .then(() => db.disconnect());
};

insertMockPhotos();

