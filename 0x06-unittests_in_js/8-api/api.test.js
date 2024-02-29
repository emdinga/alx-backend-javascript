const { expect } = require('chai');
const request = require('request');
const app = require('./api');

const PORT = 7865;
const BASE_URL = `http://localhost:${PORT}`;

describe('Index page', () => {
  it('Should return correct status code', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Should return correct result', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
