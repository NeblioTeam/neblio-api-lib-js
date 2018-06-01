/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
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
    factory(root.expect, root.NeblioRestApiSuite);
  }
}(this, function(expect, NeblioRestApiSuite) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NeblioRestApiSuite.GetBlockResponse();
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

  describe('GetBlockResponse', function() {
    it('should create an instance of GetBlockResponse', function() {
      // uncomment below and update the code to test GetBlockResponse
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be.a(NeblioRestApiSuite.GetBlockResponse);
    });

    it('should have the property hash (base name: "hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property confirmations (base name: "confirmations")', function() {
      // uncomment below and update the code to test the property confirmations
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property merkleroot (base name: "merkleroot")', function() {
      // uncomment below and update the code to test the property merkleroot
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property tx (base name: "tx")', function() {
      // uncomment below and update the code to test the property tx
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property bits (base name: "bits")', function() {
      // uncomment below and update the code to test the property bits
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property previousblockhash (base name: "previousblockhash")', function() {
      // uncomment below and update the code to test the property previousblockhash
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextblockhash (base name: "nextblockhash")', function() {
      // uncomment below and update the code to test the property nextblockhash
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

    it('should have the property reward (base name: "reward")', function() {
      // uncomment below and update the code to test the property reward
      //var instane = new NeblioRestApiSuite.GetBlockResponse();
      //expect(instance).to.be();
    });

  });

}));