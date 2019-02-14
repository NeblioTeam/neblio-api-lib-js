/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Neblioapi);
  }
}(this, function(expect, Neblioapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Neblioapi.InsightApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InsightApi', function() {
    describe('getAddress', function() {
      it('should call getAddress successfully', function(done) {
        //uncomment below and update the code to test getAddress
        //instance.getAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddressBalance', function() {
      it('should call getAddressBalance successfully', function(done) {
        //uncomment below and update the code to test getAddressBalance
        //instance.getAddressBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddressTotalReceived', function() {
      it('should call getAddressTotalReceived successfully', function(done) {
        //uncomment below and update the code to test getAddressTotalReceived
        //instance.getAddressTotalReceived(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddressTotalSent', function() {
      it('should call getAddressTotalSent successfully', function(done) {
        //uncomment below and update the code to test getAddressTotalSent
        //instance.getAddressTotalSent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddressUnconfirmedBalance', function() {
      it('should call getAddressUnconfirmedBalance successfully', function(done) {
        //uncomment below and update the code to test getAddressUnconfirmedBalance
        //instance.getAddressUnconfirmedBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAddressUtxos', function() {
      it('should call getAddressUtxos successfully', function(done) {
        //uncomment below and update the code to test getAddressUtxos
        //instance.getAddressUtxos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBlock', function() {
      it('should call getBlock successfully', function(done) {
        //uncomment below and update the code to test getBlock
        //instance.getBlock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBlockIndex', function() {
      it('should call getBlockIndex successfully', function(done) {
        //uncomment below and update the code to test getBlockIndex
        //instance.getBlockIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRawTx', function() {
      it('should call getRawTx successfully', function(done) {
        //uncomment below and update the code to test getRawTx
        //instance.getRawTx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStatus', function() {
      it('should call getStatus successfully', function(done) {
        //uncomment below and update the code to test getStatus
        //instance.getStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSync', function() {
      it('should call getSync successfully', function(done) {
        //uncomment below and update the code to test getSync
        //instance.getSync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTx', function() {
      it('should call getTx successfully', function(done) {
        //uncomment below and update the code to test getTx
        //instance.getTx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTxs', function() {
      it('should call getTxs successfully', function(done) {
        //uncomment below and update the code to test getTxs
        //instance.getTxs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendTx', function() {
      it('should call sendTx successfully', function(done) {
        //uncomment below and update the code to test sendTx
        //instance.sendTx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
