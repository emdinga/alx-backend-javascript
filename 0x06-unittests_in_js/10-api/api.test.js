const { expect } = require('chai');
const request = require('request');
const app = require('./api');

const PORT = 7865;
const BASE_URL = `http://localhost:${PORT}`;

describe('Login endpoint', () => {
  it('Should return correct message when POST /login is called', (done) => {
    request.post(`${BASE_URL}/login`, { json: { userName: 'Betty' } }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('Should return correct structure when GET /available_payments is called', (done) => {
    request.get(`${BASE_URL}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});
