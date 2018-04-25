const request = require('supertest');
const app = require('./app.js');
const mongoose = require('mongoose');

afterAll(() => {
  mongoose.disconnect();
});

test('It should send a response on a GET request', () => {
  return request(app).get('/rooms/1').then(response => {
    expect(response.statusCode).toBe(301);
  });
});

test('It should get photos from the database', () => {
  return request(app).get('/rooms/1/photos').then(response => {
    expect(response.body[0].photoUrl).not.toBe(undefined);
  });
});