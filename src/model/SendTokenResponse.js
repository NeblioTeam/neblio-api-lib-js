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
 * The SendTokenResponse model module.
 * @module model/SendTokenResponse
 * @version 1.2.1
 */
class SendTokenResponse {
    /**
     * Constructs a new <code>SendTokenResponse</code>.
     * @alias module:model/SendTokenResponse
     */
    constructor() { 
        
        SendTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendTokenResponse} obj Optional instance to populate.
     * @return {module:model/SendTokenResponse} The populated <code>SendTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendTokenResponse();

            if (data.hasOwnProperty('txHex')) {
                obj['txHex'] = ApiClient.convertToType(data['txHex'], 'String');
            }
            if (data.hasOwnProperty('ntp1OutputIndexes')) {
                obj['ntp1OutputIndexes'] = ApiClient.convertToType(data['ntp1OutputIndexes'], ['Number']);
            }
            if (data.hasOwnProperty('multisigOutputs')) {
                obj['multisigOutputs'] = ApiClient.convertToType(data['multisigOutputs'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Unsigned, raw transaction hex of the transaction to send the token
 * @member {String} txHex
 */
SendTokenResponse.prototype['txHex'] = undefined;

/**
 * Array of indexes transfering NTP1 tokens
 * @member {Array.<Number>} ntp1OutputIndexes
 */
SendTokenResponse.prototype['ntp1OutputIndexes'] = undefined;

/**
 * Array of indexes of multisig outputs
 * @member {Array.<Number>} multisigOutputs
 */
SendTokenResponse.prototype['multisigOutputs'] = undefined;






export default SendTokenResponse;

