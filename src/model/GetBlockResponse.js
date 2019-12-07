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

import ApiClient from '../ApiClient';

/**
 * The GetBlockResponse model module.
 * @module model/GetBlockResponse
 * @version 1.2.1
 */
class GetBlockResponse {
    /**
     * Constructs a new <code>GetBlockResponse</code>.
     * @alias module:model/GetBlockResponse
     */
    constructor() { 
        
        GetBlockResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetBlockResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockResponse} obj Optional instance to populate.
     * @return {module:model/GetBlockResponse} The populated <code>GetBlockResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetBlockResponse();

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('confirmations')) {
                obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('merkleroot')) {
                obj['merkleroot'] = ApiClient.convertToType(data['merkleroot'], 'String');
            }
            if (data.hasOwnProperty('tx')) {
                obj['tx'] = ApiClient.convertToType(data['tx'], ['String']);
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('bits')) {
                obj['bits'] = ApiClient.convertToType(data['bits'], 'String');
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'Number');
            }
            if (data.hasOwnProperty('previousblockhash')) {
                obj['previousblockhash'] = ApiClient.convertToType(data['previousblockhash'], 'String');
            }
            if (data.hasOwnProperty('nextblockhash')) {
                obj['nextblockhash'] = ApiClient.convertToType(data['nextblockhash'], 'String');
            }
            if (data.hasOwnProperty('reward')) {
                obj['reward'] = ApiClient.convertToType(data['reward'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Block hash
 * @member {String} hash
 */
GetBlockResponse.prototype['hash'] = undefined;

/**
 * Number of confirmations block has
 * @member {Number} confirmations
 */
GetBlockResponse.prototype['confirmations'] = undefined;

/**
 * Block size in bytes
 * @member {Number} size
 */
GetBlockResponse.prototype['size'] = undefined;

/**
 * Block height
 * @member {Number} height
 */
GetBlockResponse.prototype['height'] = undefined;

/**
 * Block version
 * @member {Number} version
 */
GetBlockResponse.prototype['version'] = undefined;

/**
 * Merkleroot of block
 * @member {String} merkleroot
 */
GetBlockResponse.prototype['merkleroot'] = undefined;

/**
 * Array of tx ids in the block
 * @member {Array.<String>} tx
 */
GetBlockResponse.prototype['tx'] = undefined;

/**
 * Block time relative to epoch
 * @member {Number} time
 */
GetBlockResponse.prototype['time'] = undefined;

/**
 * Block nonce
 * @member {Number} nonce
 */
GetBlockResponse.prototype['nonce'] = undefined;

/**
 * Block bits
 * @member {String} bits
 */
GetBlockResponse.prototype['bits'] = undefined;

/**
 * Block difficulty
 * @member {Number} difficulty
 */
GetBlockResponse.prototype['difficulty'] = undefined;

/**
 * Hash of the previous block on the chain
 * @member {String} previousblockhash
 */
GetBlockResponse.prototype['previousblockhash'] = undefined;

/**
 * Hash of the next block on the chain
 * @member {String} nextblockhash
 */
GetBlockResponse.prototype['nextblockhash'] = undefined;

/**
 * Number of NEBL awarded in this block
 * @member {Number} reward
 */
GetBlockResponse.prototype['reward'] = undefined;






export default GetBlockResponse;

