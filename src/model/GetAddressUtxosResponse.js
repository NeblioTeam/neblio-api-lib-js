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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetAddressUtxosResponseInner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetAddressUtxosResponseInner'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.GetAddressUtxosResponse = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.GetAddressUtxosResponseInner);
  }
}(this, function(ApiClient, GetAddressUtxosResponseInner) {
  'use strict';




  /**
   * The GetAddressUtxosResponse model module.
   * @module model/GetAddressUtxosResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>GetAddressUtxosResponse</code>.
   * Array of objects representing this address&#39; UTXOs
   * @alias module:model/GetAddressUtxosResponse
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>GetAddressUtxosResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressUtxosResponse} obj Optional instance to populate.
   * @return {module:model/GetAddressUtxosResponse} The populated <code>GetAddressUtxosResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'GetAddressUtxosResponseInner');

    }
    return obj;
  }




  return exports;
}));

