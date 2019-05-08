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

import ApiClient from '../ApiClient';

/**
 * The GetAddressInfoResponseTokens model module.
 * @module model/GetAddressInfoResponseTokens
 * @version 1.2.1
 */
class GetAddressInfoResponseTokens {
    /**
     * Constructs a new <code>GetAddressInfoResponseTokens</code>.
     * @alias module:model/GetAddressInfoResponseTokens
     */
    constructor() { 
        
        GetAddressInfoResponseTokens.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAddressInfoResponseTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressInfoResponseTokens} obj Optional instance to populate.
     * @return {module:model/GetAddressInfoResponseTokens} The populated <code>GetAddressInfoResponseTokens</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddressInfoResponseTokens();

            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('issueTxid')) {
                obj['issueTxid'] = ApiClient.convertToType(data['issueTxid'], 'String');
            }
            if (data.hasOwnProperty('divisibility')) {
                obj['divisibility'] = ApiClient.convertToType(data['divisibility'], 'Number');
            }
            if (data.hasOwnProperty('lockStatus')) {
                obj['lockStatus'] = ApiClient.convertToType(data['lockStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('aggregationPolicy')) {
                obj['aggregationPolicy'] = ApiClient.convertToType(data['aggregationPolicy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique NTP1 identifier for this token
 * @member {String} tokenId
 */
GetAddressInfoResponseTokens.prototype['tokenId'] = undefined;

/**
 * Number of Tokens
 * @member {Number} amount
 */
GetAddressInfoResponseTokens.prototype['amount'] = undefined;

/**
 * TXID the token originally was issued in
 * @member {String} issueTxid
 */
GetAddressInfoResponseTokens.prototype['issueTxid'] = undefined;

/**
 * Decimal places the token is divisible to
 * @member {Number} divisibility
 */
GetAddressInfoResponseTokens.prototype['divisibility'] = undefined;

/**
 * Whether the token is locked, preventing more from being issued
 * @member {Boolean} lockStatus
 */
GetAddressInfoResponseTokens.prototype['lockStatus'] = undefined;

/**
 * Whether the tokens can be aggregated together
 * @member {String} aggregationPolicy
 */
GetAddressInfoResponseTokens.prototype['aggregationPolicy'] = undefined;






export default GetAddressInfoResponseTokens;

