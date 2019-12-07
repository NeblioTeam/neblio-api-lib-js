/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.3.0
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
    instance = new Neblioapi.GetTransactionInfoResponseVin();
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

  describe('GetTransactionInfoResponseVin', function() {
    it('should create an instance of GetTransactionInfoResponseVin', function() {
      // uncomment below and update the code to test GetTransactionInfoResponseVin
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be.a(Neblioapi.GetTransactionInfoResponseVin);
    });

    it('should have the property txid (base name: "txid")', function() {
      // uncomment below and update the code to test the property txid
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be();
    });

    it('should have the property vout (base name: "vout")', function() {
      // uncomment below and update the code to test the property vout
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be();
    });

    it('should have the property scriptSig (base name: "scriptSig")', function() {
      // uncomment below and update the code to test the property scriptSig
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be();
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be();
    });

    it('should have the property previousOutput (base name: "previousOutput")', function() {
      // uncomment below and update the code to test the property previousOutput
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be();
    });

    it('should have the property tokens (base name: "tokens")', function() {
      // uncomment below and update the code to test the property tokens
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new Neblioapi.GetTransactionInfoResponseVin();
      //expect(instance).to.be();
    });

  });

}));
