const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response from the API', function (done) {
    const success = true;
    getPaymentTokenFromAPI(success)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should handle API request failure', function (done) {
    const success = false;
    getPaymentTokenFromAPI(success)
      .then((response) => {
        done(new Error('Test should have failed'));
      })
      .catch((error) => {
        expect(error.message).to.equal('API request failed');
        done();
      });
  });
});
