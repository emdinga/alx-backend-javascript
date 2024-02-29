const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let logSpy;

  beforeEach(function () {
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    logSpy.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(logSpy);
    sinon.assert.calledWith(logSpy, 'The total is: 120');
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(logSpy);
    sinon.assert.calledWith(logSpy, 'The total is: 20');
  });
});
