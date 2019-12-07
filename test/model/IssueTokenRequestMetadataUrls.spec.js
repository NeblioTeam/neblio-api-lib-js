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
    instance = new Neblioapi.IssueTokenRequestMetadataUrls();
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

  describe('IssueTokenRequestMetadataUrls', function() {
    it('should create an instance of IssueTokenRequestMetadataUrls', function() {
      // uncomment below and update the code to test IssueTokenRequestMetadataUrls
      //var instane = new Neblioapi.IssueTokenRequestMetadataUrls();
      //expect(instance).to.be.a(Neblioapi.IssueTokenRequestMetadataUrls);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Neblioapi.IssueTokenRequestMetadataUrls();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Neblioapi.IssueTokenRequestMetadataUrls();
      //expect(instance).to.be();
    });

    it('should have the property mimeType (base name: "mimeType")', function() {
      // uncomment below and update the code to test the property mimeType
      //var instane = new Neblioapi.IssueTokenRequestMetadataUrls();
      //expect(instance).to.be();
    });

    it('should have the property dataHash (base name: "dataHash")', function() {
      // uncomment below and update the code to test the property dataHash
      //var instane = new Neblioapi.IssueTokenRequestMetadataUrls();
      //expect(instance).to.be();
    });

  });

}));
