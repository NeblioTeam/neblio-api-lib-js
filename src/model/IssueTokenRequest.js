/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.0.0
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IssueTokenRequestMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IssueTokenRequestMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.IssueTokenRequest = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.IssueTokenRequestMetadata);
  }
}(this, function(ApiClient, IssueTokenRequestMetadata) {
  'use strict';




  /**
   * The IssueTokenRequest model module.
   * @module model/IssueTokenRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>IssueTokenRequest</code>.
   * @alias module:model/IssueTokenRequest
   * @class
   * @param issueAddress {String} Address issuing the token
   * @param amount {Number} Number of tokens to issue
   * @param divisibility {Number} Number of decimal places the token should be divisble by (0-7)
   * @param fee {Number} Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
   * @param reissuable {Boolean} whether the token should be reissuable
   */
  var exports = function(issueAddress, amount, divisibility, fee, reissuable) {
    var _this = this;

    _this['issueAddress'] = issueAddress;
    _this['amount'] = amount;
    _this['divisibility'] = divisibility;
    _this['fee'] = fee;
    _this['reissuable'] = reissuable;

  };

  /**
   * Constructs a <code>IssueTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueTokenRequest} obj Optional instance to populate.
   * @return {module:model/IssueTokenRequest} The populated <code>IssueTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('issueAddress')) {
        obj['issueAddress'] = ApiClient.convertToType(data['issueAddress'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('divisibility')) {
        obj['divisibility'] = ApiClient.convertToType(data['divisibility'], 'Number');
      }
      if (data.hasOwnProperty('fee')) {
        obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
      }
      if (data.hasOwnProperty('reissuable')) {
        obj['reissuable'] = ApiClient.convertToType(data['reissuable'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = IssueTokenRequestMetadata.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * Address issuing the token
   * @member {String} issueAddress
   */
  exports.prototype['issueAddress'] = undefined;
  /**
   * Number of tokens to issue
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Number of decimal places the token should be divisble by (0-7)
   * @member {Number} divisibility
   */
  exports.prototype['divisibility'] = undefined;
  /**
   * Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
   * @member {Number} fee
   */
  exports.prototype['fee'] = undefined;
  /**
   * whether the token should be reissuable
   * @member {Boolean} reissuable
   */
  exports.prototype['reissuable'] = undefined;
  /**
   * @member {module:model/IssueTokenRequestMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));

