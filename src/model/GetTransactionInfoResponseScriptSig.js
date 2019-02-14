/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetTransactionInfoResponseScriptSig model module.
 * @module model/GetTransactionInfoResponseScriptSig
 * @version 1.2.1
 */
class GetTransactionInfoResponseScriptSig {
    /**
     * Constructs a new <code>GetTransactionInfoResponseScriptSig</code>.
     * @alias module:model/GetTransactionInfoResponseScriptSig
     */
    constructor() { 
        
        GetTransactionInfoResponseScriptSig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTransactionInfoResponseScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionInfoResponseScriptSig} obj Optional instance to populate.
     * @return {module:model/GetTransactionInfoResponseScriptSig} The populated <code>GetTransactionInfoResponseScriptSig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTransactionInfoResponseScriptSig();

            if (data.hasOwnProperty('asm')) {
                obj['asm'] = ApiClient.convertToType(data['asm'], 'String');
            }
            if (data.hasOwnProperty('hex')) {
                obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} asm
 */
GetTransactionInfoResponseScriptSig.prototype['asm'] = undefined;

/**
 * @member {String} hex
 */
GetTransactionInfoResponseScriptSig.prototype['hex'] = undefined;






export default GetTransactionInfoResponseScriptSig;
