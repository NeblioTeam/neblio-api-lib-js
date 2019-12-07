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


import ApiClient from "../ApiClient";
import BroadcastTxRequest from '../model/BroadcastTxRequest';
import BroadcastTxResponse from '../model/BroadcastTxResponse';
import BurnTokenRequest from '../model/BurnTokenRequest';
import BurnTokenResponse from '../model/BurnTokenResponse';
import Error from '../model/Error';
import GetAddressInfoResponse from '../model/GetAddressInfoResponse';
import GetTokenHoldersResponse from '../model/GetTokenHoldersResponse';
import GetTokenIdResponse from '../model/GetTokenIdResponse';
import GetTokenMetadataResponse from '../model/GetTokenMetadataResponse';
import GetTransactionInfoResponse from '../model/GetTransactionInfoResponse';
import IssueTokenRequest from '../model/IssueTokenRequest';
import IssueTokenResponse from '../model/IssueTokenResponse';
import SendTokenRequest from '../model/SendTokenRequest';
import SendTokenResponse from '../model/SendTokenResponse';

/**
* NTP1 service.
* @module api/NTP1Api
* @version 1.2.1
*/
export default class NTP1Api {

    /**
    * Constructs a new NTP1Api. 
    * @alias module:api/NTP1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


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
     * @param {module:model/BroadcastTxRequest} broadcastTxRequest Object representing a transaction to broadcast
     * @param {module:api/NTP1Api~broadcastTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxResponse}
     */
    broadcastTx(broadcastTxRequest, callback) {
      let postBody = broadcastTxRequest;
      // verify the required parameter 'broadcastTxRequest' is set
      if (broadcastTxRequest === undefined || broadcastTxRequest === null) {
        throw new Error("Missing the required parameter 'broadcastTxRequest' when calling broadcastTx");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BroadcastTxResponse;
      return this.apiClient.callApi(
        '/ntp1/broadcast', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {module:model/BurnTokenRequest} burnTokenRequest Object representing the token to be burned
     * @param {module:api/NTP1Api~burnTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BurnTokenResponse}
     */
    burnToken(burnTokenRequest, callback) {
      let postBody = burnTokenRequest;
      // verify the required parameter 'burnTokenRequest' is set
      if (burnTokenRequest === undefined || burnTokenRequest === null) {
        throw new Error("Missing the required parameter 'burnTokenRequest' when calling burnToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BurnTokenResponse;
      return this.apiClient.callApi(
        '/ntp1/burntoken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getAddressInfo(address, callback) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling getAddressInfo");
      }

      let pathParams = {
        'address': address
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetAddressInfoResponse;
      return this.apiClient.callApi(
        '/ntp1/addressinfo/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getTokenHolders(tokenid, callback) {
      let postBody = null;
      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling getTokenHolders");
      }

      let pathParams = {
        'tokenid': tokenid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTokenHoldersResponse;
      return this.apiClient.callApi(
        '/ntp1/stakeholders/{tokenid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
    getTokenId(tokensymbol, callback) {
      let postBody = null;
      // verify the required parameter 'tokensymbol' is set
      if (tokensymbol === undefined || tokensymbol === null) {
        throw new Error("Missing the required parameter 'tokensymbol' when calling getTokenId");
      }

      let pathParams = {
        'tokensymbol': tokensymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTokenIdResponse;
      return this.apiClient.callApi(
        '/ntp1/tokenid/{tokensymbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokenMetadata operation.
     * @callback module:api/NTP1Api~getTokenMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTokenMetadataResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Metadata of Token
     * Returns the metadata associated with a token. 
     * @param {String} tokenid TokenId to request metadata for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.verbosity 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
     * @param {module:api/NTP1Api~getTokenMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenMetadataResponse}
     */
    getTokenMetadata(tokenid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling getTokenMetadata");
      }

      let pathParams = {
        'tokenid': tokenid
      };
      let queryParams = {
        'verbosity': opts['verbosity']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTokenMetadataResponse;
      return this.apiClient.callApi(
        '/ntp1/tokenmetadata/{tokenid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {Object} opts Optional parameters
     * @param {Number} opts.verbosity 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
     * @param {module:api/NTP1Api~getTokenMetadataOfUtxoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTokenMetadataResponse}
     */
    getTokenMetadataOfUtxo(tokenid, utxo, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tokenid' is set
      if (tokenid === undefined || tokenid === null) {
        throw new Error("Missing the required parameter 'tokenid' when calling getTokenMetadataOfUtxo");
      }
      // verify the required parameter 'utxo' is set
      if (utxo === undefined || utxo === null) {
        throw new Error("Missing the required parameter 'utxo' when calling getTokenMetadataOfUtxo");
      }

      let pathParams = {
        'tokenid': tokenid,
        'utxo': utxo
      };
      let queryParams = {
        'verbosity': opts['verbosity']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTokenMetadataResponse;
      return this.apiClient.callApi(
        '/ntp1/tokenmetadata/{tokenid}/{utxo}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactionInfo operation.
     * @callback module:api/NTP1Api~getTransactionInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTransactionInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information On an NTP1 Transaction
     * Returns detailed information regarding an NTP1 transaction. 
     * @param {String} txid Neblio txid to get information on.
     * @param {module:api/NTP1Api~getTransactionInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTransactionInfoResponse}
     */
    getTransactionInfo(txid, callback) {
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling getTransactionInfo");
      }

      let pathParams = {
        'txid': txid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTransactionInfoResponse;
      return this.apiClient.callApi(
        '/ntp1/transactioninfo/{txid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {module:model/IssueTokenRequest} issueTokenRequest Object representing the token to be created
     * @param {module:api/NTP1Api~issueTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTokenResponse}
     */
    issueToken(issueTokenRequest, callback) {
      let postBody = issueTokenRequest;
      // verify the required parameter 'issueTokenRequest' is set
      if (issueTokenRequest === undefined || issueTokenRequest === null) {
        throw new Error("Missing the required parameter 'issueTokenRequest' when calling issueToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IssueTokenResponse;
      return this.apiClient.callApi(
        '/ntp1/issue', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * @param {module:model/SendTokenRequest} sendTokenRequest Object representing the token to be sent
     * @param {module:api/NTP1Api~sendTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendTokenResponse}
     */
    sendToken(sendTokenRequest, callback) {
      let postBody = sendTokenRequest;
      // verify the required parameter 'sendTokenRequest' is set
      if (sendTokenRequest === undefined || sendTokenRequest === null) {
        throw new Error("Missing the required parameter 'sendTokenRequest' when calling sendToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SendTokenResponse;
      return this.apiClient.callApi(
        '/ntp1/sendtoken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
