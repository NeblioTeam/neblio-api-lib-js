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
import BroadcastTxResponse from '../model/BroadcastTxResponse';
import Error from '../model/Error';
import GetAddressResponse from '../model/GetAddressResponse';
import GetBlockIndexResponse from '../model/GetBlockIndexResponse';
import GetBlockResponse from '../model/GetBlockResponse';
import GetRawTxResponse from '../model/GetRawTxResponse';
import GetSyncResponse from '../model/GetSyncResponse';
import GetTxResponse from '../model/GetTxResponse';
import GetTxsResponse from '../model/GetTxsResponse';
import SendTxRequest from '../model/SendTxRequest';

/**
* TestnetInsight service.
* @module api/TestnetInsightApi
* @version 1.2.1
*/
export default class TestnetInsightApi {

    /**
    * Constructs a new TestnetInsightApi. 
    * @alias module:api/TestnetInsightApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the testnetGetAddress operation.
     * @callback module:api/TestnetInsightApi~testnetGetAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAddressResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns address object
     * Returns NEBL address object containing information on a specific address
     * @param {String} address Address
     * @param {module:api/TestnetInsightApi~testnetGetAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAddressResponse}
     */
    testnetGetAddress(address, callback) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling testnetGetAddress");
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
      let returnType = GetAddressResponse;
      return this.apiClient.callApi(
        '/testnet/ins/addr/{address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetAddressBalance operation.
     * @callback module:api/TestnetInsightApi~testnetGetAddressBalanceCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns address balance in sats
     * Returns NEBL address balance in satoshis
     * @param {String} address Address
     * @param {module:api/TestnetInsightApi~testnetGetAddressBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    testnetGetAddressBalance(address, callback) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling testnetGetAddressBalance");
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
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/testnet/ins/addr/{address}/balance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetAddressTotalReceived operation.
     * @callback module:api/TestnetInsightApi~testnetGetAddressTotalReceivedCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns total received by address in sats
     * Returns total NEBL received by address in satoshis
     * @param {String} address Address
     * @param {module:api/TestnetInsightApi~testnetGetAddressTotalReceivedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    testnetGetAddressTotalReceived(address, callback) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling testnetGetAddressTotalReceived");
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
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/testnet/ins/addr/{address}/totalReceived', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetAddressTotalSent operation.
     * @callback module:api/TestnetInsightApi~testnetGetAddressTotalSentCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns total sent by address in sats
     * Returns total NEBL sent by address in satoshis
     * @param {String} address Address
     * @param {module:api/TestnetInsightApi~testnetGetAddressTotalSentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    testnetGetAddressTotalSent(address, callback) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling testnetGetAddressTotalSent");
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
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/testnet/ins/addr/{address}/totalSent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetAddressUnconfirmedBalance operation.
     * @callback module:api/TestnetInsightApi~testnetGetAddressUnconfirmedBalanceCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns address unconfirmed balance in sats
     * Returns NEBL address unconfirmed balance in satoshis
     * @param {String} address Address
     * @param {module:api/TestnetInsightApi~testnetGetAddressUnconfirmedBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    testnetGetAddressUnconfirmedBalance(address, callback) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling testnetGetAddressUnconfirmedBalance");
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
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/testnet/ins/addr/{address}/unconfirmedBalance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetAddressUtxos operation.
     * @callback module:api/TestnetInsightApi~testnetGetAddressUtxosCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all UTXOs at a given address
     * Returns information on each Unspent Transaction Output contained at an address
     * @param {String} address Address
     * @param {module:api/TestnetInsightApi~testnetGetAddressUtxosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    testnetGetAddressUtxos(address, callback) {
      let postBody = null;
      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling testnetGetAddressUtxos");
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
      let returnType = [Object];
      return this.apiClient.callApi(
        '/testnet/ins/addr/{address}/utxo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetBlock operation.
     * @callback module:api/TestnetInsightApi~testnetGetBlockCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information regarding a Neblio block
     * Returns blockchain data for a given block based upon the block hash
     * @param {String} blockhash Block Hash
     * @param {module:api/TestnetInsightApi~testnetGetBlockCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetBlockResponse}
     */
    testnetGetBlock(blockhash, callback) {
      let postBody = null;
      // verify the required parameter 'blockhash' is set
      if (blockhash === undefined || blockhash === null) {
        throw new Error("Missing the required parameter 'blockhash' when calling testnetGetBlock");
      }

      let pathParams = {
        'blockhash': blockhash
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
      let returnType = GetBlockResponse;
      return this.apiClient.callApi(
        '/testnet/ins/block/{blockhash}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetBlockIndex operation.
     * @callback module:api/TestnetInsightApi~testnetGetBlockIndexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBlockIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns block hash of block
     * Returns the block hash of a block at a given block index
     * @param {Number} blockindex Block Index
     * @param {module:api/TestnetInsightApi~testnetGetBlockIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetBlockIndexResponse}
     */
    testnetGetBlockIndex(blockindex, callback) {
      let postBody = null;
      // verify the required parameter 'blockindex' is set
      if (blockindex === undefined || blockindex === null) {
        throw new Error("Missing the required parameter 'blockindex' when calling testnetGetBlockIndex");
      }

      let pathParams = {
        'blockindex': blockindex
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
      let returnType = GetBlockIndexResponse;
      return this.apiClient.callApi(
        '/testnet/ins/block-index/{blockindex}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetRawTx operation.
     * @callback module:api/TestnetInsightApi~testnetGetRawTxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetRawTxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns raw transaction hex
     * Returns raw transaction hex representing a NEBL transaction
     * @param {String} txid Transaction ID
     * @param {module:api/TestnetInsightApi~testnetGetRawTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetRawTxResponse}
     */
    testnetGetRawTx(txid, callback) {
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling testnetGetRawTx");
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
      let returnType = GetRawTxResponse;
      return this.apiClient.callApi(
        '/testnet/ins/rawtx/{txid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetStatus operation.
     * @callback module:api/TestnetInsightApi~testnetGetStatusCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Utility API for calling several blockchain node functions
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash
     * @param {module:api/TestnetInsightApi~testnetGetStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    testnetGetStatus(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/testnet/ins/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetSync operation.
     * @callback module:api/TestnetInsightApi~testnetGetSyncCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSyncResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get node sync status
     * Returns information on the node&#39;s sync progress
     * @param {module:api/TestnetInsightApi~testnetGetSyncCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSyncResponse}
     */
    testnetGetSync(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetSyncResponse;
      return this.apiClient.callApi(
        '/testnet/ins/sync', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetTx operation.
     * @callback module:api/TestnetInsightApi~testnetGetTxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns transaction object
     * Returns NEBL transaction object representing a NEBL transaction
     * @param {String} txid Transaction ID
     * @param {module:api/TestnetInsightApi~testnetGetTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTxResponse}
     */
    testnetGetTx(txid, callback) {
      let postBody = null;
      // verify the required parameter 'txid' is set
      if (txid === undefined || txid === null) {
        throw new Error("Missing the required parameter 'txid' when calling testnetGetTx");
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
      let returnType = GetTxResponse;
      return this.apiClient.callApi(
        '/testnet/ins/tx/{txid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetGetTxs operation.
     * @callback module:api/TestnetInsightApi~testnetGetTxsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetTxsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transactions by block or address
     * Returns all transactions by block or address
     * @param {Object} opts Optional parameters
     * @param {String} opts.address Address
     * @param {String} opts.block Block Hash
     * @param {Number} opts.pageNum Page number to display
     * @param {module:api/TestnetInsightApi~testnetGetTxsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetTxsResponse}
     */
    testnetGetTxs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'address': opts['address'],
        'block': opts['block'],
        'pageNum': opts['pageNum']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetTxsResponse;
      return this.apiClient.callApi(
        '/testnet/ins/txs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testnetSendTx operation.
     * @callback module:api/TestnetInsightApi~testnetSendTxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BroadcastTxResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Broadcasts a signed raw transaction to the network (not NTP1 specific)
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction. 
     * @param {module:model/SendTxRequest} sendTxRequest Object representing a transaction to broadcast
     * @param {module:api/TestnetInsightApi~testnetSendTxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BroadcastTxResponse}
     */
    testnetSendTx(sendTxRequest, callback) {
      let postBody = sendTxRequest;
      // verify the required parameter 'sendTxRequest' is set
      if (sendTxRequest === undefined || sendTxRequest === null) {
        throw new Error("Missing the required parameter 'sendTxRequest' when calling testnetSendTx");
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
        '/testnet/ins/tx/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
