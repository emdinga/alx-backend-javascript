const { expect } = require('chai');
const request = require('request');
const app = require('./api');

const PORT = 7865;
const BASE_URL = `http://localhost:${PORT}`;

describe('Cart page', () => {
  it('Should return correct status code when :id is a number', (done) => {
    request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Should return correct result when :id is a number', (done) => {
    request.get(`${BASE_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Should return correct status code when :id is NOT a number', (done) => {
    request.get(`${BASE_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
