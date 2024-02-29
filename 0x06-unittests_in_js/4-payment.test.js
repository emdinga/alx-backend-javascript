const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let stub;

  beforeEach(function () {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function () {
    stub.restore();
  });

  it('should call Utils.calculateNumber with type SUM', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20);
  });

  it('should log the correct message with the stubbed sum', function () {
    const logSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(logSpy, 'The total is: 10');
    logSpy.restore();
  });
});
