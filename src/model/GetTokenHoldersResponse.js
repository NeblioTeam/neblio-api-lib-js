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
import GetTokenHoldersResponseHolders from './GetTokenHoldersResponseHolders';

/**
 * The GetTokenHoldersResponse model module.
 * @module model/GetTokenHoldersResponse
 * @version 1.2.1
 */
class GetTokenHoldersResponse {
    /**
     * Constructs a new <code>GetTokenHoldersResponse</code>.
     * @alias module:model/GetTokenHoldersResponse
     */
    constructor() { 
        
        GetTokenHoldersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTokenHoldersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenHoldersResponse} obj Optional instance to populate.
     * @return {module:model/GetTokenHoldersResponse} The populated <code>GetTokenHoldersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenHoldersResponse();

            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
            if (data.hasOwnProperty('holders')) {
                obj['holders'] = ApiClient.convertToType(data['holders'], [GetTokenHoldersResponseHolders]);
            }
            if (data.hasOwnProperty('divibility')) {
                obj['divibility'] = ApiClient.convertToType(data['divibility'], 'Number');
            }
            if (data.hasOwnProperty('lockStatus')) {
                obj['lockStatus'] = ApiClient.convertToType(data['lockStatus'], 'Boolean');
            }
            if (data.hasOwnProperty('aggregationPolicy')) {
                obj['aggregationPolicy'] = ApiClient.convertToType(data['aggregationPolicy'], 'String');
            }
            if (data.hasOwnProperty('someUtxo')) {
                obj['someUtxo'] = ApiClient.convertToType(data['someUtxo'], 'String');
            }
        }
        return obj;
    }


}

/**
 * TokenId of the token
 * @member {String} tokenId
 */
GetTokenHoldersResponse.prototype['tokenId'] = undefined;

/**
 * @member {Array.<module:model/GetTokenHoldersResponseHolders>} holders
 */
GetTokenHoldersResponse.prototype['holders'] = undefined;

/**
 * How many decimal points the token is divisble to
 * @member {Number} divibility
 */
GetTokenHoldersResponse.prototype['divibility'] = undefined;

/**
 * Whether new issuances of this token are locked
 * @member {Boolean} lockStatus
 */
GetTokenHoldersResponse.prototype['lockStatus'] = undefined;

/**
 * Whether the tokesn are aggregatable
 * @member {String} aggregationPolicy
 */
GetTokenHoldersResponse.prototype['aggregationPolicy'] = undefined;

/**
 * A UTXO of this token
 * @member {String} someUtxo
 */
GetTokenHoldersResponse.prototype['someUtxo'] = undefined;






export default GetTokenHoldersResponse;

