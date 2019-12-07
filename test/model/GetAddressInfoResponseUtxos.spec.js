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
    instance = new Neblioapi.GetAddressInfoResponseUtxos();
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

  describe('GetAddressInfoResponseUtxos', function() {
    it('should create an instance of GetAddressInfoResponseUtxos', function() {
      // uncomment below and update the code to test GetAddressInfoResponseUtxos
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be.a(Neblioapi.GetAddressInfoResponseUtxos);
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

    it('should have the property txid (base name: "txid")', function() {
      // uncomment below and update the code to test the property txid
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

    it('should have the property blockheight (base name: "blockheight")', function() {
      // uncomment below and update the code to test the property blockheight
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

    it('should have the property blocktime (base name: "blocktime")', function() {
      // uncomment below and update the code to test the property blocktime
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

    it('should have the property scriptPubKey (base name: "scriptPubKey")', function() {
      // uncomment below and update the code to test the property scriptPubKey
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

    it('should have the property used (base name: "used")', function() {
      // uncomment below and update the code to test the property used
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

    it('should have the property tokens (base name: "tokens")', function() {
      // uncomment below and update the code to test the property tokens
      //var instane = new Neblioapi.GetAddressInfoResponseUtxos();
      //expect(instance).to.be();
    });

  });

}));
