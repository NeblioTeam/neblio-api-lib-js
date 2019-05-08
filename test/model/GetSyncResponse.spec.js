/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.4
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
    instance = new Neblioapi.GetSyncResponse();
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

  describe('GetSyncResponse', function() {
    it('should create an instance of GetSyncResponse', function() {
      // uncomment below and update the code to test GetSyncResponse
      //var instane = new Neblioapi.GetSyncResponse();
      //expect(instance).to.be.a(Neblioapi.GetSyncResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Neblioapi.GetSyncResponse();
      //expect(instance).to.be();
    });

    it('should have the property blockChainHeight (base name: "blockChainHeight")', function() {
      // uncomment below and update the code to test the property blockChainHeight
      //var instane = new Neblioapi.GetSyncResponse();
      //expect(instance).to.be();
    });

    it('should have the property syncPercentage (base name: "syncPercentage")', function() {
      // uncomment below and update the code to test the property syncPercentage
      //var instane = new Neblioapi.GetSyncResponse();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instane = new Neblioapi.GetSyncResponse();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new Neblioapi.GetSyncResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Neblioapi.GetSyncResponse();
      //expect(instance).to.be();
    });

  });

}));
