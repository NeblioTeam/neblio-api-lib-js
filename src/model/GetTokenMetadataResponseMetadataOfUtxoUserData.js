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
 * The GetTokenMetadataResponseMetadataOfUtxoUserData model module.
 * @module model/GetTokenMetadataResponseMetadataOfUtxoUserData
 * @version 1.2.1
 */
class GetTokenMetadataResponseMetadataOfUtxoUserData {
    /**
     * Constructs a new <code>GetTokenMetadataResponseMetadataOfUtxoUserData</code>.
     * Metadata set by user on token for UTXO
     * @alias module:model/GetTokenMetadataResponseMetadataOfUtxoUserData
     */
    constructor() { 
        
        GetTokenMetadataResponseMetadataOfUtxoUserData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTokenMetadataResponseMetadataOfUtxoUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenMetadataResponseMetadataOfUtxoUserData} obj Optional instance to populate.
     * @return {module:model/GetTokenMetadataResponseMetadataOfUtxoUserData} The populated <code>GetTokenMetadataResponseMetadataOfUtxoUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenMetadataResponseMetadataOfUtxoUserData();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} meta
 */
GetTokenMetadataResponseMetadataOfUtxoUserData.prototype['meta'] = undefined;






export default GetTokenMetadataResponseMetadataOfUtxoUserData;

