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
    define(['ApiClient', 'model/BroadcastTxRequest', 'model/BroadcastTxResponse', 'model/BurnTokenRequest', 'model/BurnTokenResponse', 'model/Error', 'model/GetAddressInfoResponse', 'model/GetTokenHoldersResponse', 'model/GetTokenIdResponse', 'model/GetTokenMetadataResponse', 'model/IssueTokenRequest', 'model/IssueTokenResponse', 'model/SendTokenRequest', 'model/SendTokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BroadcastTxRequest'), require('../model/BroadcastTxResponse'), require('../model/BurnTokenRequest'), require('../model/BurnTokenResponse'), require('../model/Error'), require('../model/GetAddressInfoResponse'), require('../model/GetTokenHoldersResponse'), require('../model/GetTokenIdResponse'), require('../model/GetTokenMetadataResponse'), require('../model/IssueTokenRequest'), require('../model/IssueTokenResponse'), require('../model/SendTokenRequest'), require('../model/SendTokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.NTP1Api = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.BroadcastTxRequest, root.NeblioRestApiSuite.BroadcastTxResponse, root.NeblioRestApiSuite.BurnTokenRequest, root.NeblioRestApiSuite.BurnTokenResponse, root.NeblioRestApiSuite.Error, root.NeblioRestApiSuite.GetAddressInfoResponse, root.NeblioRestApiSuite.GetTokenHoldersResponse, root.NeblioRestApiSuite.GetTokenIdResponse, root.NeblioRestApiSuite.GetTokenMetadataResponse, root.NeblioRestApiSuite.IssueTokenRequest, root.NeblioRestApiSuite.IssueTokenResponse, root.NeblioRestApiSuite.SendTokenRequest, root.NeblioRestApiSuite.SendTokenResponse);
  }
}(this, function(ApiClient, BroadcastTxRequest, BroadcastTxResponse, BurnTokenRequest, BurnTokenResponse, Error, GetAddressInfoResponse, GetTokenHoldersResponse, GetTokenIdResponse, GetTokenMetadataResponse, IssueTokenRequest, IssueTokenResponse, SendTokenRequest, SendTokenResponse) {
  'use strict';

  /**
   * NTP1 service.
   * @module api/NTP1Api
   * @version 1.0.0
   */

  /**
   * Constructs a new NTP1Api. 
   * @alias module:api/NTP1Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the broadcastTx operation.
     * @callback module:api/NTP1Api~broadcastTxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Broadcasts a signed raw transaction to the network
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 
     * @param {module:model/BroadcastTxRequest} body Object representing a transaction to broadcast
     * @param {module:api/NTP1Api~broadcastTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxResponse}
     */
    this.broadcastTx = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling broadcastTx");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BroadcastTxResponse;

      return this.apiClient.callApi(
        '/ntp1/broadcast', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the burnToken operation.
     * @callback module:api/NTP1Api~burnTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BurnTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Builds a transaction that burns an NTP1 Token
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain. 
     * @param {module:model/BurnTokenRequest} body Object representing the token to be burned
     * @param {module:api/NTP1Api~burnTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BurnTokenResponse}
     */
    this.burnToken = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling burnToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BurnTokenResponse;

      return this.apiClient.callApi(
        '/ntp1/burntoken', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddressInfo operation.
     * @callback module:api/NTP1Api~getAddressInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAddressInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information On a Neblio Address
     * Returns both NEBL and NTP1 token UTXOs held at the given address. 
     * @param {String} address Neblio Address to get information on.
     * @param {module:api/NTP1Api~getAddressInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAddressInfoResponse}
     */
    this.getAddressInfo = function(address, callback) {
      var postBody = null;

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressInfo");
      }


      var pathParams = {
        'address': address
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetAddressInfoResponse;

      return this.apiClient.callApi(
        '/ntp1/addressinfo/{address}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokenHolders operation.
     * @callback module:api/NTP1Api~getTokenHoldersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenHoldersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Addresses Holding a Token
     * Returns the the the addresses holding a token and how many tokens are held 
     * @param {String} tokenid TokenId to request metadata for
     * @param {module:api/NTP1Api~getTokenHoldersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenHoldersResponse}
     */
    this.getTokenHolders = function(tokenid, callback) {
      var postBody = null;

      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling getTokenHolders");
      }


      var pathParams = {
        'tokenid': tokenid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenHoldersResponse;

      return this.apiClient.callApi(
        '/ntp1/stakeholders/{tokenid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokenId operation.
     * @callback module:api/NTP1Api~getTokenIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenIdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the tokenId representing a token
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network 
     * @param {String} tokensymbol Token symbol
     * @param {module:api/NTP1Api~getTokenIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenIdResponse}
     */
    this.getTokenId = function(tokensymbol, callback) {
      var postBody = null;

      // verify the required parameter 'tokensymbol' is set
      if (tokensymbol === undefined || tokensymbol === null) {
        throw new Error("Missing the required parameter 'tokensymbol' when calling getTokenId");
      }


      var pathParams = {
        'tokensymbol': tokensymbol
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenIdResponse;

      return this.apiClient.callApi(
        '/ntp1/tokenid/{tokensymbol}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokenMetadataOfIssuance operation.
     * @callback module:api/NTP1Api~getTokenMetadataOfIssuanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Issuance Metadata of Token
     * Returns the metadata associated with a token at time of issuance.  
     * @param {String} tokenid TokenId to request metadata for
     * @param {module:api/NTP1Api~getTokenMetadataOfIssuanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenMetadataResponse}
     */
    this.getTokenMetadataOfIssuance = function(tokenid, callback) {
      var postBody = null;

      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling getTokenMetadataOfIssuance");
      }


      var pathParams = {
        'tokenid': tokenid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenMetadataResponse;

      return this.apiClient.callApi(
        '/ntp1/tokenmetadata/{tokenid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokenMetadataOfUtxo operation.
     * @callback module:api/NTP1Api~getTokenMetadataOfUtxoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get UTXO Metadata of Token
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction. 
     * @param {String} tokenid TokenId to request metadata for
     * @param {String} utxo Specific UTXO to request metadata for
     * @param {module:api/NTP1Api~getTokenMetadataOfUtxoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenMetadataResponse}
     */
    this.getTokenMetadataOfUtxo = function(tokenid, utxo, callback) {
      var postBody = null;

      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling getTokenMetadataOfUtxo");
      }

      // verify the required parameter 'utxo' is set
      if (utxo === undefined || utxo === null) {
        throw new Error("Missing the required parameter 'utxo' when calling getTokenMetadataOfUtxo");
      }


      var pathParams = {
        'tokenid': tokenid,
        'utxo': utxo
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetTokenMetadataResponse;

      return this.apiClient.callApi(
        '/ntp1/tokenmetadata/{tokenid}/{utxo}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the issueToken operation.
     * @callback module:api/NTP1Api~issueTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Builds a transaction that issues a new NTP1 Token
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain. 
     * @param {module:model/IssueTokenRequest} body Object representing the token to be created
     * @param {module:api/NTP1Api~issueTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTokenResponse}
     */
    this.issueToken = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IssueTokenResponse;

      return this.apiClient.callApi(
        '/ntp1/issue', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendToken operation.
     * @callback module:api/NTP1Api~sendTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Builds a transaction that sends an NTP1 Token
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain. 
     * @param {module:model/SendTokenRequest} body Object representing the token to be sent
     * @param {module:api/NTP1Api~sendTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendTokenResponse}
     */
    this.sendToken = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SendTokenResponse;

      return this.apiClient.callApi(
        '/ntp1/sendtoken', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));